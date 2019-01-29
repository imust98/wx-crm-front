# wx-crm-front

## 项目开始
```
npm install

npm install nei -g

npm run nei:build
```

### 本地启动
```
npm run serve
```

### 编译和构建
```
npm run build
```

### lint 检查
```
npm run lint
```
### commit 规范
例如：git commit -m "ci: add webpack config file"

type 用于表示此次改动的类型，目前常用的主要有以下几种：

- feat 新功能（feature）表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）

- fix 表示在代码库中修复了一个 bug（这和语义化版本中的 PATCH 相对应）

- docs 文档（documentation）

- style (格式化, 缺失分号等; 不包括生产代码变动)

- refactor (重构代码)

- perf (性能优化)

- test (添加缺失的测试, 重构测试, 不包括生产代码变动)

- ci (系统持续集成等)

See [commitlint](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional#type-enum)


### 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).

### Git 分支管理

通用git工作流

<img src="http://nos.netease.com/edu-image/1548294632426-yzs.jpeg">

1、需求确认后，从master创建develop分支
2、开发人员从develop分支创建自己的feature分支进行开发
3、master分支发生变更，需要从master分支合并到develop分支、可以考虑定期合并一次
4、feature分支合并到对应的develop分支之前，需要从develop分支合并到feature分支
5、feature分支合并到对应的develop分支之后，发布到测试环境进行测试
6、develop分支在测试环境测试通过之后，合并到release分支并发布到预发布环境进行测试
7、release分支在预发布环境验证通过后，合并到master分支并发布到生产环境进行验证