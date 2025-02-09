import Giscus from "@giscus/react"
import "./App.css"
import Background from "./components/Background"
import Card from "./components/Card"
import Container from "./components/Container"
import FriendCard from "./components/FriendCard"
import { LINKS } from "./config"

function App() {

  return (
    <div className="app">
      <Background/>
      <Container style={{display:'flex', flexDirection:'column', gap:8, padding:16}}>
        <Card>
          <h1>说明：</h1>
          <p> 交换友链请在底部 <strong><a style={{color:'#64ffda'}} href="#discuss">留言板（点击跳转）</a></strong> 提交 <strong style={{color:'#64ffda'}}>标题</strong>、<strong style={{color:'#64ffda'}}>图标</strong> 和 <strong style={{color:'#64ffda'}}>链接</strong>，例如:</p>
          <pre style={{background:"rgb(23,23,25)"}}>
            <code>
              &#123;<br/>
              <span style={{color:"#2196f3"}}>    title</span>: <span style={{color:"#64ffda"}}>"Plan C 的主页"</span>,<br/>
              <span style={{color:"#2196f3"}}>    icon</span>: <a href="https://hubenchang0515.github.io/icons/launcher.svg" target="_blank" style={{color:'#64ffda'}}>"https://hubenchang0515.github.io/icons/launcher.svg"</a>,<br/>
              <span style={{color:"#2196f3"}}>    url</span>: <a href="https://hubenchang0515.github.io/" target="_blank" style={{color:'#64ffda'}}>"https://hubenchang0515.github.io/"</a>,<br/>
              &#125;
            </code>
          </pre>
          <p><strong style={{color:'#64ffda'}}>链接</strong> 和 <strong style={{color:'#64ffda'}}>图标</strong> 应当为 HTTPS </p>
          <p><strong style={{color:'#64ffda'}}>图标</strong> 的尺寸建议不小于 64×64，建议为正方形</p>
          <p>也可以与留言板上的其他用户交换链接</p>
        </Card>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(250px,1fr))', gap:8}}>
          {
            LINKS.map((item, index) => {
              return <FriendCard key={index} title={item.title} icon={item.icon} url={item.url} />
            })
          }
        </div>
        <Card id="discuss">
            <Giscus
              id="comments"
              repo="hubenchang0515/friends"
              repoId="R_kgDON2rdLA"
              category="Announcements"
              categoryId="DIC_kwDON2rdLM4CmzPN"
              mapping="url"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="noborder_dark"
              lang="zh-CN"
              loading="lazy"
            />
        </Card>
      </Container>
    </div>
  )
}

export default App
