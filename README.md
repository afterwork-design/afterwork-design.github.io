# [Afterwork](https://afterwork-design.github.io/)

产品设计师为了解决自己遇到的问题，而持续建造的数字工具集合

## env

```bash
$ node -v
14.x
```

## 添加资源

更新 json 文件后，提交 pull request 方式。

在 `src/server/` 目录下，更新对应的 json 文件，修改后，提交 pr。

### json 文件

成员信息：
```json
[
    {
        "name": "王鹏飞",
        "tag": "程序员",
        "site": "https://pengfeixc.com",
        "avatar": "./images/members/wangpengfei.png"
    },
    {
        "name": "唐维娟",
        "tag": "设计",
        "site": "https://tangweijuan.com",
        "avatar": "./images/members/tangweijuan.png"
    }
]
```

项目信息：
```json
[
    {
        "title": "Castalia——不只是设计师的灵感源泉",
        "description": "Castalia 是一个资源导航网站，精选国内外优质网站，让每个人都能找到自己需要的资源",
        "image": "./images/projects/castalia.png",
        "url": "https://afterwork-design.github.io/castalia/"
    }
]
```
