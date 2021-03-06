---
title: 框架介绍
date: 2022年3月15日14:12:05

---
#  1.Creatar3D的组成

Creatar3D平台主要由：**SDK类库**、**功能示例**两部分组成。可下载到本地离线使用。

| 组成     | 获取方式     | 相关资料                              | 备注 |
| -------- | ------------ | ------------------------------------- | ---- |
| SDK类库  | [免费下载]() | [API文档](http://192.168.1.158:8003/) |      |
| 功能示例 |              | [示例](http://192.168.1.158:8003/)    |      |
| 项目     |              |                                       |      |

> 正常开发流程：下载SDK、参考“功能示例、项目模板”进行开发即可。

# 2. SDK类库介绍

Creatar3D平台开发的SDK所有类及方法均以 Creatar3d开头命名，*`Creatar3d.` 为平台框架的默认命名空间，所有用到的类及方法都是通过*`Creatar3d.`来调用。 开发时尽量不要使用 Creatar3d 来定义自己的变量或类名、方法名，避免框架无法正常使用。

## 2.1 SDK主类库

| 包名           | 当前版本 | CDN地址 | 备注         |
| -------------- | -------- | ------- | ------------ |
| Creatar3d.core | 1.0.0    |         | 主类库       |
| Creatar3d.base | 1.0.0    |         | Cesium包类库 |

> 各版本更新日志，可以访问

## 2.2 SDK的架构

Creatar3D平台 SDK架构图，建议使用前先熟悉整体架构图，以便能够快速使用。[新窗口查看大图]()