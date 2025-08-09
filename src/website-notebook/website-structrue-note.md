---
title: 静态网站搭建
icon: blog
date: 2025-08-09 19:58:19
author: yhy72819
category:
    - 教程
tag:
    - notebook
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---



主题官方文档：vuepress

主题官网主页：[主页](https://theme-hope.vuejs.press/zh/)

## 1. 进入服务终端

::: preview 进入服务终端

    1. 文件夹新建 command+shift+n
    2. snipaste截图option+1，取消esc
    3. 在文件上右键点服务再点N I2 tab here进入终端

![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753192205462-056fd090-02fb-42df-bdfe-cc2eb0cac169.png)

:::

## 2. 命令解释

::: preview 命令解释

    2. pwd：查询该文件的路径  cd：全称 change direction 切换文件路径（由于前置项目可能不是你目标文件项目，直接输入指令会定位到前置项目上，这时就可用cd来切换到目标文件，注意要从父文件夹上一级一级选下来，否则会找不到） 注意：warn是警告，无需注意，需要注意的是error

:::

## 3.  选项

 ::: preview 选项![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753192876812-106f510e-28bb-45f2-bcf8-49e5c288859b.png)

## 4. Care

::: preview Care

    1. <font style="color:rgb(60,60,67);">如何使用以及查看官方文档进行操作； </font>
    2. <font style="color:rgb(60,60,67);">各个工具的使用； （在终端直接输入以下代码下载）</font>

```plain
brew install “软件名”
```

    3. <font style="color:rgb(60,60,67);">整个网站项目的逻辑要建立起来；（各个软件、各个部分分别是做什么的…..） </font>
    4. <font style="color:rgb(60,60,67);">提问； </font>

:::

## 5. Not Care

::: preview Not-care

    5. <font style="color:rgb(60,60,67);">不去深度探究原理、技术；</font>

:::

## 6. 本地项目初始化：

::: preview 本地项目初始化

```plain
pnpm create vuepress-theme-hope my-docs
```

:::

## 7. 本地项目运行

::: preview 本地项目运行

    1. 使用终端进到网站路径下：鼠标右键-->服务-->new item to Tab here![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753192205462-056fd090-02fb-42df-bdfe-cc2eb0cac169.png)
    2. 使用如下启动本地服务器

```plain
 pnpm run docs:dev
```

![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753278250827-4ebaa8c0-af16-43aa-a480-0653e65b7f93.png)

         c.浏览器访问方式：
    
        1. 方法一：Command+鼠标点击，直接激活默认浏览器访问
        2. 方法二：鼠标选中链接并复制，粘贴到浏览器地址框中回车即可访问
    
         d.本地服务关闭：Control+c进行退出
    
        1. 当网站遇到未知问题时，首选停止并重新启动进行尝试
        2. 还有一种是真的有问题，重启也没用，就开始排查

:::

## 8. Github仓库创建与部署

::: preview Github仓库创建与部署

---

### 8.1. Github创建服务器仓库

        1. 访问Github：[https://github.com/](https://github.com/)
        2. 
    
    ![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753360258437-c4f91627-09da-49ed-968e-f19b4dfed23b.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753360299908-de34b0fd-ea73-4f3c-bee3-940a4d08f4ab.png)

### 8.2 把网站推送到Github仓库：

    1. 切换至SSH：使用SSH可直接使用SSH密钥，如用Https，则每次对仓库操作，都需要输入账号和密码进行验证，因此为了便捷就用SSH![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753363043146-6b80a506-25d0-4197-9367-709d391db79c.png)
    2. 按照给出的命令执行，但是有些要修改（要修改并执行在本地，并非在网页上修改，网页只是提供模版给你看）![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753363721309-c3d719a0-203f-41f5-b36c-6f6e06a5a30b.png)

```plain
git init #初始化本地仓库（init即为inition的简写）
git add . #进行提交登记，“."代表添加路径下所有文件，文件夹（要将默认的readme.md改成.)
git commit -m "本次提交的信息｜本次做出的修改信息” #上一步登记完成后，这一步进行提交审核
git branch -M main #指定分支为“main”(main就是自动选主要文件，一般不用改main）
git remote add origin git@账户仓库网址如上（无网址前缀） #设定数据要推送的目标仓库（地址）
git push -u origin main #开始推送/地址为“main”分支
```

![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753363390232-5f427254-1abe-4871-8b56-6004504ea35e.png)echo是指在无该文件夹的时候自动创建文件夹，但若已经有该文件夹，则删除该段代码

### 8.3 开始推送

    1. 启动终端，路径在网站路径下；![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753364597161-56f93218-d603-45b7-aa2b-703ed61ad950.png)
    2. 开始执行命令![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753364875339-9b1e0512-59b0-48fb-ba71-745d55e3f741.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753364902393-5268b9ed-dddc-4040-b2c5-f3684df03ed0.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753364925514-aaa699b6-737a-4349-8f96-123830a082e6.png)
    3. 刷新Github界面，会发现所有文件已经上传成功(注意，上传的时候一个仓库对应一个文件夹，建新仓库的时候一定要建新文件夹）

![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753365022511-1bc2f91e-9c25-452f-9191-a709c192e31d.png)

### 8.4 设置部署（设置部署后，公网即可访问网站）

    4. 点击设置settings：![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753365173354-7fe16687-f274-4986-9ae7-9e01e3f5f11e.png)
    5. 点击Pages：![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753365247064-10461bad-70ae-4716-a0e0-a54576528fec.png)
    6. 切换部署方式：![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753365407056-6d8ae513-4be7-481b-8240-87f715fd0fce.png)
    7. 开始部署![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753365833639-8a37f661-4ef9-40cd-a130-085de3a0b4e5.png)
    8. 检查部署是否成功（框内的是对勾就成功）![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753366137711-5553f959-18fd-4865-87d6-ffe9ddd49219.png)

:::

## 9. VScode项目

::: preview VScode项目

注：每一次修改都要提交，提交完后进入github看修改部署是否成功，如成功就再用公网域名进入自己网站检验（不能用本地，因为本地无需部署即可修改）

### 9.1：VScode打开项目：

方法1:

        1. 打开VScode软件
        2. File-->Open Folder-->选择网站文件夹

### 9.2：VScode提交项目

        1. VScode第三个按钮
        2. 打一条message（仅做说明，可随意写）
        3. 点击commit![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753620274300-fde320e3-50a0-4562-bc7a-58275289e1d3.png)
        4. 点击：Sync Changes

方法2:

        1. 打开终端，到目标路径（用control+c停止之前的行为）
        2. 输入："code ."(进入VScode）
        3. 后面同方法1

:::

## 10.设置专属域名

::: preview 设置专属域名

    1. 购买域名：[https://www.aliyun.com/](https://www.aliyun.com/)
    2. 登录阿里云设置域名解析，解析到Github提供的默认域名![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753537234846-059d784a-185e-42ec-9254-94f4c28deb29.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753537297861-6e7702e7-779e-4044-863b-f0d53ad29208.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753537357566-bffa7c6e-cea6-4220-8dd8-c649f6af3cc1.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753537409936-74f1d662-7555-48ba-975e-ec531d6df9c4.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753537552370-c2e423b0-6ad0-4e74-a176-e99c8e029e2a.png)

此时www即为网站前缀但要注意，一定要在此之后再添加记录改为@以此允许不输前缀只输域名即可访问的情况![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753537631557-ff48c6c2-beee-44b7-9379-e183d6b480a7.png)

         c.设置域名的目的：
    
        1. 通过本地链接进入最多只能使共用同一wifi的人进入
        2. 用github配发网站登陆在国内难以进入，因为github基本在国内禁止（虽然有些时候可以不通过任何手段直接进入）
        3. 购买国内阿里云的域名后，域名解析直接来到国内，可借此无障碍访问自己在github上的网站
        4. 公网ip过于繁琐，无法记忆
    
         d.github的网站项目也需要进行绑定：
    
        1. 原因：需要让github知道这个解析是被允许的
        2. 方法：打开VScode，在左侧目录的src文件下选择vuepress，在此文件下选择public，在public文件夹下新建CNAME文件并在此文件下输入网站域名（公网网站），即可成功![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753619651218-501d8066-7eab-4426-9b38-46cb11d936dd.png)

:::

## 11. 修改网站主页信息

::: preview 修改网站主页信息

---

### 11.1：修改主页名称以及slogan

    1. 路径：src/README.md

```plain
title:博客主页 #修改成自己想要的名称
heroImage: https://theme-hope-assets.vuejs.press/logo.svg
heroText：博客名称 #自己的博客名
```

```plain
     b.修改口号:tagline:你可以在这里放置你的口号和标语
```

         c.修改背景图片（参考网站[https://haowallpaper.com/homeView](https://haowallpaper.com/homeView)）代码如下

```plain
#图片添加（在readme头部添加）
bgImage: /存放图片文件夹/文件名加后缀
```

图片下载后，放入此路径:src/.vuepress/public/自己新建图片文件夹

         d.注意事项
    
        1. 头部信息需在冒号后加空格，否则会引发错误；
        2. 在网站的所有配置当中，“/”开始就代表文件夹“public”
        3. VScode忘打message如何拯救![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753709694330-0a3977df-457c-41a0-bb07-55836dce8f83.png)
            1. 方法一：在弹出的界面中，输入message（不要在井号后输入，井号后文字是注释，无实际意义）-->Command+S保存后-->关掉，再次点击按钮进行推送
            2. 方法二：直接关掉弹出的文件界面，并重新操作提交流程
    
          e.修改logo
    
        1. 设计自己喜欢的logo
        2. 图片放入：src/.vuepress/public/自己新建图片文件夹

```plain
heroImage: /photos/photo2.png
```

        3. 建议：图片配置要见名知意，有利于后期优化改进
        4. logo按照当前网站情况来看：圆形会更合适；
        5. 也可以在AI生成后，自行采用工具裁切

### 11.2 去掉主页项目框![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753710376982-7fa3b972-da65-49cd-afc9-5549f68d60e6.png)

### 11.3 更换作者头像与昵称，说明

path：src/.vuepress/theme.ts

```plain
 blog: {
    name: "你的名字",//昵称
    description: "一个前端开发者", //说明
    avatar: "/头像名.jpg", //头像(注意头像名前要加路径，/表示public
    intro: "/intro.html",
    ...
}
```

### 11.4 修改社交平台的链接

Path：src/.vuepress/theme.ts

 不需要的可以选择：注释，删除，需要的需要把链接修改成自己的（注释快捷键： Command + /）

```plain
medias: {
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
```

注意：以图片中二维码为链接的直接用图片部署形式填写入双引号内![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753796393591-4725b81f-de87-471a-ad29-5682251f77ad.png),同时，任何图片部署入public都可按指定路径在原域名后输入作为链接访问![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753797872631-4df4be95-572a-40c0-8060-a001f7094ec5.png)

### 11.5 菜单栏修改

![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753883078743-b53acc8f-d01a-4a16-b46c-b16392affd79.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753883115528-863b984c-cc42-4265-b1b2-e4634d956a1a.png)

                                                      注意：
    
    1. 此处的括号关系一定要清楚，
    2. 逗号是机械语言中的间隔，任何代码串末尾一定要加逗号（最后一串除外，可加可不加）
    3. 初始可能会有含有“demo”的这一行代码，这是系统自带的菜单栏，删除此行代码即可删除自带菜单栏
    4. 以下为菜单栏所在的文件
    5. link和children是必有其一的，但也可以都有
    
        ![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753883407563-6f17a239-b998-4052-906f-78814ef26f50.png)

另：有关文章变pdf的方法，可右键点击打印![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753883536159-b6d4cc20-87c1-4540-baaf-fbfca88fd506.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753883645836-0dfa2801-ba80-43aa-8140-8714580d7eee.png)

### 11.6 sidebar的妙法

对于sidebar，我们无需如navbar一样一个一个输，可用如下图格式直接令其自动生成（structure即为自动生成的指令）![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753884166418-6fec1b65-7fbc-43c7-a74d-8fe84c90bff1.png)

:::

## 12.增加网页评论

::: preview 增加网页评论

### 12.1:LeanCloud设置（数据库）

    1. 工具链接：

[快速上手](https://waline.js.org/guide/get-started/)

    2. 注册LC
    3. 登陆或注册LeanCloud国际版并进入控制台
    4. 点击左上角创建应用并起名，使用免费的开发版（详情请见a链接中的教程）![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753968778336-98d6fb84-4be9-4111-993a-4584156aff12.png)
    5. 注册后点击应用，选择设置中的应用凭证![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753969193272-d4e2a52e-0191-477a-a77f-c1219d55b5bc.png)

### 12.2：Vercel部署（服务端)

    1. 利用上述工具进入Vercel
    2. 进入后用github快速绑定Vercel![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753969788357-379c73f8-0a27-44c8-b2a1-4c0e339927d6.png)
    3. 绑定成功后![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753969822348-3d064e94-d088-4504-84d3-d98b80ebe9f7.png)
    4. 点击continue to dashboard即可开始
    5. <font style="color:rgb(60, 60, 67);">点击顶部的 </font>`<font style="color:rgb(60, 60, 67);">Settings</font>`<font style="color:rgb(60, 60, 67);"> - </font>`<font style="color:rgb(60, 60, 67);">Environment Variables</font>`<font style="color:rgb(60, 60, 67);"> 进入环境变量配置页，并配置三个环境变量 </font>`<font style="color:rgb(60, 60, 67);">LEAN_ID</font>`<font style="color:rgb(60, 60, 67);">, </font>`<font style="color:rgb(60, 60, 67);">LEAN_KEY</font>`<font style="color:rgb(60, 60, 67);"> 和 </font>`<font style="color:rgb(60, 60, 67);">LEAN_MASTER_KEY</font>`<font style="color:rgb(60, 60, 67);"> 。它们的值分别对应上一步在 LeanCloud 中获得的 </font>`<font style="color:rgb(60, 60, 67);">APP ID</font>`<font style="color:rgb(60, 60, 67);">, </font>`<font style="color:rgb(60, 60, 67);">APP KEY</font>`<font style="color:rgb(60, 60, 67);">, </font>`<font style="color:rgb(60, 60, 67);">Master Key</font>`<font style="color:rgb(60, 60, 67);">。</font>![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753970527870-f5a528d8-1d7b-4d22-9e18-31ed5fe7ffc0.png)
    6. <font style="color:rgb(60, 60, 67);">完成后右下角会弹出验证框，全部点进行验证即可开始验证</font>
    7. <font style="color:rgb(60, 60, 67);">检查是否成功点击上方deployment观看，ready即为成功</font>![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1753970722742-1372b059-7947-4e9d-a875-50adbcf7f11d.png)
    8. 注意：当我们进入自己的Vercel账号时，为本体账号，应进入自己的项目中进行配置![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754229210796-d20cc394-a44e-4431-b526-4c25e64f8141.png)

进入后再进入settings才能正常部署，而直接在个人页面进入Settings则无法正常部署

    9. 如果想要更活泼的评论，在输入comment: true的附近添加一行reaction：true

```plain
reaction: true
```

即可出现如下效果![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754229905408-605c7d54-0020-4fee-9fc5-a15d1be75bd2.png)

### 12.3 自定义域名

注意，不能直接在vercel的Settings中的Domins设置自己的主域名，原因：主域名第一次出现在Github部署成功后，是为了在国内更方便解析，而主域名已经被使用于承载网站本身，故而不能配置在评论系统之中，因为一个域名只能用一次

解决方法：使用二级域名,如comment.example.com就是example.com的二级域名，其中comment也就是域名前缀，其地位等同于www，同时，任何两个域名的联系是要双向绑定的，因为双向绑定才会使双方获得互相权限，因此，我们不仅应在vercel上部署主域名，还应在阿里云（你购买主域名的网站）部署vercel域名



在此之后，用VScode将评论区上传至网站，具体如下![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754143543610-effa8580-504b-46d8-85af-f8099278d625.png)![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754143575250-00201050-b3ee-41d0-b5ac-c411c2d5fb85.png)

### 12.4 使文章下方出现评论区

先输入如下代码到本地终端

```plain
pnpm add -D @waline/client
```

以安装插件waline，安装好之后，VScode会自动出现部署提示，部署完成后进行以下操作

![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754227062830-a1908ac8-ea14-4978-89c4-58e1dea1cb2e.png)

在src路径下的文章文件中任意行加入以下代码即可开启

```plain
comment：true
```

也可以直接在theme.ts行中加上如上代码直接为所有文章开启评论区

:::

## 13. 更多快捷键

::: preview 更多快捷键

command+Z撤回

command+S保存

command+F检索

command+/备注与取消备注

control+C停止运行

:::

## 14.图标修改

::: preview 图标修改

vuepress系统支持如下三种图标：

    1. <font style="color:rgb(60, 60, 67);background-color:rgba(142, 150, 170, 0.14);">iconify</font>
    2. <font style="color:rgb(60, 60, 67);background-color:rgba(142, 150, 170, 0.14);">fontawesome</font>
    3. <font style="color:rgb(60, 60, 67);background-color:rgba(142, 150, 170, 0.14);">iconfont（icon即是图标的意思）</font>

我们拿fontawesome举例，以下为链接

[Font Awesome](https://fontawesome.com/)

进入后，点击搜索栏，根据自己需求用英文搜索图标![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754315051548-59192832-c188-4f12-a5d8-43e2a9197307.png)

Pro是付费款，选择不付费的，并点击![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754315140384-28e34ee2-621f-4bc8-a60f-bf9bd9e8f47c.png)

于Vscode的icon一行（分别在navbar和readme中）粘贴，并删掉非如上图绿色部分内容，如：![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754315267192-777dae03-d107-4fc5-9c35-3200c11a092a.png)

保存后部署即可

注意：部分图标可能不适配，表现为图标在本地和公网都不显示，此时需换一个上传

同时，ico文件只存在于图标处，不能与已上传图片一样可用路径直接搜索到图片的网址观看图片，因此，ico文件是无链接形式的，通过链接无法搜索到该图标

:::

## 15. 搜索功能

::: preview 搜索功能

进入vuepress后点击指南中的功能，再点击其中的搜索![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754399516070-6496e30f-ab7c-44a7-8d61-c38a094efb86.png)

    1. 用上图第一步的代码粘贴入自己网站的终端中，即可开始下载，但我们推荐使用最后的plugin-search，即上图显示，其他的要么繁琐要么功能不足

注意：下载时如果过慢，可以考虑用如下代码行换源

```plain
pnpm config set registry https://registry.npmmirror.com/
```

该代码行即为将外网文件换源为内网镜像文件

    2. 在Vscode中部署：找到theme.ts中的plugins，在此后插入此段代码![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754400404072-b3bf238f-3a68-4146-a19c-8bfe607087bb.png)

其中maxSuggestions为最大搜索提示量，如下图所示![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754400518416-746c33ed-52cf-45e2-9ae6-31abb7b42d0f.png)

hotkeys为打开搜索的快捷键，这里就不设了

locales指的是匹配的链接（语言）：

“/”表示的是默认语言，如果写/en/那就是英文

placeholder指的是搜索栏中未有文字输入时默认显示的字

:::

## 16. 右上角链接及网站本身链接显示修改

::: preview 右上角链接及网站本身链接显示修改

由于我们使用vuepress的模型，最初这些链接全是vuepress自身的链接，我们需完成修改

方法：Vscode选择theme.ts,对：

![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754486651985-321f5c60-01d2-4f56-91da-4ae844820b7d.png)

方框中的内容进行修改即可，注意repo中一定要填入自己网站仓库的链接，不要写成别的了



至此，框架已全部建成

:::

---

## 17. 文章编写的基础配置

::: preview  文章编写的基础配置

注：我们现在需要使用Typora（非常方便）

    1. 打开网站文件夹
    2. 点击src里面的README.md文件
    3. src下可以新建任何文件夹，随意命名（推荐使用英文且不带空格，如想要间隔使用："-")
        1. 推荐英文原因：所有文件夹都将会生成链接，如用中文，使用中会导致链接问题![](https://cdn.nlark.com/yuque/0/2025/png/58919770/1754487853441-e9e5d909-e9f0-4ef7-9b22-c6a7f033ea20.png)
    4. 文章：后缀：.md ,全英文命名且数字不要用空格或者特殊字符，空格用“-”代替
    5. 所有文章要以下面的模版开头：

```plain
--- #用于开启文章编写
title:
icon: blog
date: 2025-08-06 21:58:44
author:
category:
    - 你的分类1
    - 你的分类2
tag:
    - 你的标签1
    - 你的标签2
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---
```

注：用command+/显示或关闭源代码

[纯文本自动复制](https://autotime.bornforthis.cn/vuepress-front-matter)

也可以用这个链接实时复制

    6. 标题编写：##+空格+1.+空格(#数决定了标题几，不用标题一，见Typora）
    7. 功能性改良

```plain
markdown: {
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    mark: true,
    codeTabs: true,
    tabs: true,
    math: true,
    hint: true,
    alert: true,
    chartjs: false,
    echarts: false,
    mermaid: true,
    vuePlayground: false,
    sub: true,
    spoiler: true,
    sup: true,
    tasklist: true,
    include: true,
    attrs: false,
    footnote: true,
    align: true,
    flowchart: false,
    gfm: true,
    preview: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    vPre: true,
  },
```

以上代码在Vscode的theme.ts中修改

作用：使得以下格式生效：

```plain
::: preview 演示
内容
:::
```

还必须在终端输入

```plain
pnpm add -D katex
```

构建数学库完成

和

```plain
pnpm add -D mermaid
```

:::
