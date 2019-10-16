### git 

#### mac安装git
- ```$ brew install wget```  [brew官网](https://brew.sh/)
- ```AppStore``` 下载```Xcode```
#### window 安装git
- 从Git官网直接下载[安装程序](https://git-scm.com/downloads),然后按默认选项安装即可。

#### 修改git 账号
--global 表示全局git仓库，表示修改全局git仓库
```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```
单个仓库修改
```
$ git config user.name "Your name"
$ git config user.email "Your email"
```

#### 创建git仓库
-  ```$ git init``` 初始化
-  ```$ git add .``` || ```$ git add  fileName1 fileName2```   把修改文件提交暂存
- ```$ git commit  -m  '备注' ``` 把暂存文件提交到本地分支

#### 版本回退
- ```$ git reset --hard HEAD^ ``` 回到上个版本
- ```$ git reset --hard HEAD^^ ``` 回到上上个版本
- ```$ git reset --hard HEAD~100 ``` 回到上```100```个版本
- ```$ git reset --hard 1094a ``` 回到```commit id``` 有```1094a``` 的节点

#### 撤销

- 第一种情况是还没有执行```$ git add .```,那么 ```$ git checkout --  fileName ```  就可以撤销这个文件修改
- 第二种情况是执行了```$ git add .```,  那么第一步执行```git reset HEAD fineName ```，把文件回退到```$ git add ```之前,第二步执行```$ git checkout -- fileName```取消文件修改, 撤销所有可以使用```git reset HEAD . ```
- 第三种是执行了```git commit ```,输入```git reset 上一次commitId```,```git log ```查看提交记录,

#### 删除文件恢复
- ```$ git checkout -- fileName  ```,删除文件恢复 

#### 查看 
- ```$ git log ``` 查看提交记录
- ```$ git reflog ``` 查看提交记录
- ```$ git status ``` 查看当前仓库状态
- ```$ git status -s``` 查看当前仓库状态
- ```$ git diff  ``` 对比文件修改

#### 远程仓库
- 添加远程仓库```$ git remote add origin address```,name 表示git远程地址
- ```$ git push -u origin master```,把本地文件推送到远程```master```,```-u```参数的意义是：git会把本地和远程仓库关联起来
- ```$ git clone address```, address 表示git地址
- ```$ git remote -v``` 查看远程仓库信息
- ```$ git push  origin master``` 推送到远端
- ```$ git pull``` 拉取数据
- ```$ git branch --set-upstream-to=origin/dev dev``` ,远端和本地分支关联

#### 创建分支
- ```$ git branch dev```创建dev分支
- ```$ git branch ```查看分支，带```*```表示当前所在分支

#### 切换分支
- ```$ git checkout dev ```切换到```dev```分支
- ```$ git checkout -b dev```,创建```dev```分支并切换到```dev```分支

#### 合并分支
- ```$ git merge dev``` 把```dev```分支合并到当前分支

#### 删除分支
- ```$ git branch -d dev``` 删除```dev```分支
- ```$ git branch -D dev``` 强制删除```dev```分支

#### 临时存放 stash
- ```$ git stash```把当前修改文件临时存储
- ```$ git stash list ```,可以看到临时存储的信息
- ```$ git stash pop```,把临时存放的文件释放出来并删除```stash list ```记录信息
- ```$ git stash apply```恢复,```$ git stash drop```删除记录信息

#### 标签 
tag就是一个让人容易记住的有意义的名字，它跟某个```commit```绑在一起。
- ```$ git tab v1.0```最新的```commit ```打上标签
- ```$ git tab v1.0  commitId```,为指定的```commit ```打上标签
- ``` $ git show v0.9```,即可快速查看这条记录
- ```$ git tag -a v1.0 -m '备注，提升信息'```
- ```$ git tag -d v1.0```  删除本地标签
- ```$ git push origin tagname``` 推送本地标签至远端
- ```$ git push origin --tags``` 推送所有本地标签
- ```$ git push origin :refs/tags/tagName```

#### 名称解释
- 暂存指的是```$ git add .```,把本地文件放入暂存


参考文档[廖雪峰老师](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
