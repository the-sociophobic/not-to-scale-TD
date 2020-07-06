import React, { Component } from 'react'

import Header from 'components/Header'

import { StoreContext } from 'utils/store'
import withRouter from 'components/withRouterAndRef'
import Input from 'components/Input'

import secondsParse from 'utils/secondsParse'


const oneSecond = 1000

const PLAY = () =>
  <div className="play-symbol" />


class Spekt extends Component {
  constructor(props) {
    super(props)

    // const userId = new URLSearchParams(window.location.search).get("q")
    const userId = window.localStorage.getItem('userId')

    this.state = {
      ticket: "",

      /*
        real

        fake
        outdated
        many-devices

        none
        pending
      */
      authorised: "pending",
      userId: userId || "",

      /*
        real
        pending
      */
      secondUser: "pending",

      /*
        never-pressed
        buffering
        countdown
        can-play
        can-restart
        in-process
        buy-another-ticket
      */
      buttonStatus: "never-pressed",
      currentChapter: 0,

      message: "00:00",
      comment: <>Нажмите <PLAY /> чтобы запустить<br />буферизацию</>,

      exitClicked: 0,
    }
  }

  componentDidMount = () =>
    this.getSessionInfo()

  getSessionInfo = async () => {
    const res = await this.context.store.getSessionInfo(this.state.userId)

    this.setState({
      authorised: res.userState,
      secondUser: res.secondUser,
      ticket: res.ticket || "",
    })

    if (res.userState === "real")
      setTimeout(() => this.login(), 500)
  }

  logout = () => {
    console.log("aaa")
    window.localStorage.removeItem('userId')
    this.context.store.logout()
    window.location.reload(false)
  }

  login = async () => {
    this.setState({
      authorised: "pending",
      secondUser: "real"
    })
    
    const res = await this.context.store
      .login({
        ticket: this.state.ticket || "a",
        userId: this.state.userId,
      })

    console.log(res)

    if (res.userState === "real") {
      this.setState({
        userId: res.userId,
        authorised: "real",
        ticket: res.ticket,
        texts: res.texts,
        left: res.left,
        canSelect: res.canSelect,
        chapters: res.chapters,
        currentChapter: res.currentChapter,
        message: secondsParse(res.chapters[res.currentChapter].time),
      })

      // console.log(res)
      
      // this.props.history.push({
      //   pathname: this.props.location.path,
      //   search: "?" + new URLSearchParams({q: res.userId}).toString()
      // })
      window.localStorage.setItem('userId', res.userId)
    }
    else
      this.setState({authorised: res.userState})
  }


  initializeAudio = () => {
    this.audio = new Audio()

    this.audio.addEventListener('canplay', () =>
      this.state.buttonStatus !== "can-restart" &&
        setTimeout(() => {
          this.setState({
            buttonStatus: "countdown",
            message: `${secondsParse(this.state.chapters[this.state.currentChapter].time)}/${secondsParse(this.audio.duration)}`,
            // comment: <>Нажмите <PLAY /> чтобы <br />начать спектакль</>
            comment: this.state.texts[0]
          })
          
          this.state.texts.slice(1)
            .forEach((line, index) =>
              setTimeout(() => 
                this.setState({
                  comment: line.split('PLAY')
                    .reduce((a, b) => <>{a}<PLAY />{b}</>)
                })
              , oneSecond * (index + 1)))

          setTimeout(() =>
            this.setState({
              buttonStatus: "can-play",
              buttonDisabled: false,
            })
          , oneSecond * (this.state.texts.length - 1))
          // , 100)

        // }, oneSecond * 1)
        }, 100)
    )


    this.audio.addEventListener('ended', () => {
      if (this.playInterval)
        clearInterval(this.playInterval)

      setTimeout(() => {
        this.setState({
          buttonStatus: "buy-another-ticket",
          comment: "Спасибо за просмотр! Хотите посмотреть ещё, купите билет"
        })

        this.context.store.logout(this.state.userId)
        window.localStorage.removeItem('userId')
      }, oneSecond * 5)
    })

    this.audio.preload = 'auto'
    this.audio.src = this.context.store.audioURL(this.state.userId)
    this.audio.load()
  }

  pressButton = () => {
    const { buttonStatus } = this.state

    switch(buttonStatus) {
      case "never-pressed":
        this.initializeAudio()

        this.setState({
          buttonStatus: "buffering",
          message: "Буферизация...",
          comment: "",
          buttonDisabled: true,
        })
        return
      case "can-play":
        this.play()
    }
  }

  restart = () => {
    this.audio.pause()
    this.audio.currentTime = this.state.chapters[this.state.currentChapter].time
    if (this.playInterval) {
      clearInterval(this.playInterval)
      this.playInterval = null
    }
    this.play()
  }

  play = () => {
    if (this.playInterval)
      return

    this.audio.currentTime = this.state.chapters[this.state.currentChapter].time

    this.setState({
      buttonStatus: "can-restart",
      buttonDisabled: true,
      message: `${secondsParse(this.audio.currentTime)}/${secondsParse(this.audio.duration)}`,
      // comment: <>Вы можете перезапустить спектакль <br className="desktop-only" />в течении первых 60&nbsp;секунд</>,
      comment: this.state.chapters[this.state.currentChapter].name,
    })

    this.playInterval = setInterval(() => {
      // if (this.audio.currentTime > 60 && this.state.buttonStatus === "can-restart")
      //   this.setState({
      //     buttonStatus: "in-process",
      //     comment: "",
      //   })

      console.log(this.audio.duration)
      this.setState({
        message: `${secondsParse(this.audio.currentTime)}/${secondsParse(this.audio.duration)}`,
        comment: this.state.chapters[this.state.currentChapter].name
      })

      const nextChapterStart = this.state.currentChapter < this.state.chapters.length - 1 ?
        this.state.chapters[this.state.currentChapter + 1].time
        :
        this.audio.duration
      if (this.audio.currentTime > nextChapterStart) {
        this.context.store.nextChapter(this.state.userId, this.state.currentChapter)
        if (this.state.currentChapter < this.state.chapters.length - 1)
          this.setState({currentChapter: this.state.currentChapter + 1})
      }
    }, oneSecond)

    this.audio.play()
  }

  buyAnotherTicket = () => {
    const win = window.open("https://tochkadostupa.spb.ru/events/not_to_scale", '_blank')
    win.focus()
  }


  renderLogin = () => {
    const error = this.state.authorised && this.state.authorised.match(/outdated|many-devices|fake/gm)
    let buttonText
    
    switch(this.state.authorised) {
      case "outdated":
        buttonText = "Билет с таким номером уже использован"
        break
      case "many-devices":
        buttonText = "Билет используется на более чем 3х устройствах"
        break
      case "fake":
        buttonText = "Билета с таким номером не существует"
        break
      default:
        buttonText = "Начать"
    }

    return (
      <div className="spekt__login">
        <div className="spekt__login__desc">
          <b>Not to scale</b> — это спектакль Энта Хэмптона и Тима Этчелса. Вам понадобятся наушники, карандаш, ластик, и лист бумаги. И второй человек. Введите номер вашего билета, нажмите кнопку «начать» и следуйте инструкциям.
        </div>
        <Input
          className={error && "form-group__input--danger"}
          placeholder="Введите номер вашего билета"
          value={this.state.ticket}
          onChange={value => this.setState({ticket: value, authorised: ""})}
        />
        <button
          className={`button button--main ${error && "button--main--danger"}`}
          onClick={() => this.login()}
          disabled={!this.state.ticket || this.state.ticket.length < 5}
        >
          {buttonText}
        </button>
      </div>
    )
  }

  renderSelect = () =>
    <div className="spekt__select">
      <div className="spekt__select">
        Выберите место за столом
      </div>
      <div className="spekt__select__picture">
        <div className="spekt__select__picture__top-list">

        </div>
      </div>
    </div>

  renderSpekt = () =>
    <div className="spekt__spekt">

      <div className="spekt__spekt__instructions">
        Для участия в спектакле Вам <b>понадобятся</b>:<br />
        1. Другой человек — Ваш партнер, находящийся рядом с Вами<br />
        2. Два устройства для запуска звука (ноутбук, планшет, смартфон)<br />
        3. Две пары наушников (для Вас и Вашего партнера)<br />
        4. Плоская поверхность, на которой можно рисовать (стол) — поверхность должна быть большая, чтобы на ней помещались четыре листа формата А4<br />
        5. Девять листов белой бумаги формата А4<br />
        6. Два заточенных простых карандаша + один запасной<br />
        7. Два ластика<br /><br />


        Дальше…<br /><br />

        Сядьте {this.state.left ? <b>слева</b> : <b>справа</b>} от другого участника перед поверхностью, на которой будете рисовать. Включите на телефоне режим «не беспокоить». Удостоверьитесь, что режим экономии энергии выключен и экран устройства не погаснет. Наденьте наушники. Положите перед собой по листу бумаги вертикально, в книжной ориентации.
        Остальные листы бумаги положите в стопку.<br /><br />
        1. Нажмите кнопку <PLAY /> одновременно со вторым пользователем.
        <br />
        2. После нажатия начнётся обратный отсчёт, вам нужно нажать второй раз на <PLAY /> максимально одновременно
        <br />
        3. Обратите внимание, что посмотреть спектакль повторно по одному билету у вас не получится
        {/* {typeof this.state.left !== "undefined" &&
          this.state.left ?
            <><br /><br /><b>Пожалуйста, сядьте слева</b></>
            :
            <><br /><br /><b>Пожалуйста, сядьте справа</b></>
          } */}
      </div>

      <div className="spekt__spekt__player">
        <div
          className="spekt__spekt__player__button-area"
        >
          <button
            className="spekt__spekt__player__button"
            onClick={() => this.pressButton()}
            disabled={this.state.buttonDisabled}
          />
        </div>
        <div className="spekt__spekt__player__text">
          {this.state.message}
        </div>
        <div className="spekt__spekt__player__comment">
          {this.state.buttonStatus === "can-restart" &&
            <button
              className="spekt__spekt__player__comment__restart"
              onClick={() => this.restart()}
            >
              перезапустить
            </button>}
          {this.state.buttonStatus === "buy-another-ticket" &&
            <button
              className="spekt__spekt__player__comment__restart"
              onClick={() => this.buyAnotherTicket()}
            >
              купить ещё один билет
            </button>}
          <div className="spekt__spekt__player__comment__text">
            {this.state.comment}
          </div>
        </div>
      </div>

    </div>

  render = () =>
    <>
      {this.state.authorised && !this.state.authorised.match(/none|outdated|many-devices|fake/gm) &&
        <Header />}
      <button onClick={() => this.logout()} >
        выйти
      </button>

      <div className="container">
        <div className="spekt">
          {/* <Loader disappear={this.state.authorised !== "pending"} /> */}
          {this.state.authorised === "real" ?
            this.state.secondUser === "pending" ?
              <div className="spekt__login__pending">
                Нарисуйте что-нибудь,<br />пока мы ждем второго<br />пользователя
              </div>
              :
              this.state.canSelect ?
                this.renderSelect()
                :
                this.renderSpekt()
            :
            this.renderLogin()
          }
        </div>
      </div>
    </>
}

Spekt.contextType = StoreContext

export default withRouter(Spekt)