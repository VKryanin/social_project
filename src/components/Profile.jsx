import prof from './Profile.module.css'

export const Profile = () => {
    return <div className={prof.content}>
    <div>
      <img src='https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg'/>
    </div>
    <div>
      ava
    </div>
    <div>
      my posts
      <div>
        new post
      </div>
      <div className={prof.posts}>
        <div className={prof.item}>
          post 1
        </div>
        <div className={prof.item}>
          post 2
        </div>
      </div>
    </div>
  </div>
}