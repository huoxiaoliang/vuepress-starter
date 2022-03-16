---
title: 相机Camera及视角控制
date: 2022年3月15日14:12:05
---
# 相机Camera及视角控制

Camera相机控制了三维场景的视图。有很多方法可以操作Camera，如旋转(rotate)、缩放(zoom)、平移(pan)和飞到目的地(flyTo)。同时也有鼠标和触摸事件用来处理与Camrea的交互，还有API来以编程方式操作摄像机。

![image](http://mars3d.cn/dev/img/guide/map-camera.jpg)

## 1. map中视角相关设置和方法

我们在创建地图时，可以在[scene的center参数 (opens new window)](http://mars3d.cn/api/Map.html#.sceneOptions)中来设置默认视角，如：

```js
var map = new mars3d.Map('mars3dContainer', {
  scene: {
    center: { lat: 25.389914, lng: 119.084961, alt: 1179575, heading: 346, pitch: -60 }
  }
})
```

当前map中与相机有关的方式：

| 方法名                                                       | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [map.getCameraView()(opens new window)](http://mars3d.cn/api/Map.html#getCameraView) | 可以获取当前地图                                             |
| [map.setCameraView(cameraView, options)(opens new window)](http://mars3d.cn/api/Map.html#setCameraView) | 将相机本身定位至指定位置                                     |
| [map.setCameraViewList(arr, enfun)(opens new window)](http://mars3d.cn/api/Map.html#setCameraViewList) | 定位到多个相机视角位置，按数组顺序播放                       |
| [map.flyHome()(opens new window)](http://mars3d.cn/api/Map.html#flyHome) | 飞行到默认视角， 一般为config.json中的center参数配置的视角。 |
| [map.flyTo(target, options)(opens new window)](http://mars3d.cn/api/Map.html#flyTo) | 飞行定位至 Cesium相关矢量对象 处                             |
| [map.flyToGraphic(graphic, options)(opens new window)](http://mars3d.cn/api/Map.html#flyToGraphic) | 飞行定位至 Graphic矢量对象 处                                |
| [map.flyToExtent(extent, options)(opens new window)](http://mars3d.cn/api/Map.html#flyToExtent) | 飞行定位至 矩形区域 处                                       |
| [map.flyToPositions(positions, options)(opens new window)](http://mars3d.cn/api/Map.html#flyToPositions) | 飞行定位至 坐标数组 处                                       |
| [map.flyToPoint(point, options)(opens new window)](http://mars3d.cn/api/Map.html#flyToPoint) | 视角中心定位至目标点(非相机位置)                             |
| [map.cancelFlyTo()(opens new window)](http://mars3d.cn/api/Map.html#cancelFlyTo) | 停止视角定位等操作                                           |

## 2. camera相机对象

[map.camera (opens new window)](http://mars3d.cn/api/Map.html#camera)相机对象,由三维地图内部创建的[Camera (opens new window)](http://mars3d.cn/api/cesium/Camera.html)类， 描述了相机的当前状态，包括：位置（position）,朝向（ orientation）, 参考空间（ reference frame）, 视锥体（view frustum）.

### 2.1 平移位置

`move*` 和 `zoom*`方法，沿着相机方向或者某个给定向量来平移相机的位置,相机朝向不变。

![image](http://mars3d.cn/dev/img/guide/map-camera-move.jpg)

### 2.2 旋转朝向

`look*` 和 `twist*` 方法，旋转相机朝向，向前向量(direction)，向上向量(up)，向右向量(right)都会改变,相机位置保持不变。
![image](http://mars3d.cn/dev/img/guide/map-camera-look.jpg)

### 2.3 平移位置+旋转朝向

`rotate*` 方法，相对一个给定的向量，旋转相机的位置和朝向。
![image](http://mars3d.cn/dev/img/guide/map-camera-roate.jpg)

## 2. screenSpaceCameraController 鼠标相机控制器对象

map.scene.screenSpaceCameraController 是[ScreenSpaceCameraController (opens new window)](http://mars3d.cn/api/cesium/ScreenSpaceCameraController.html)类 。 把屏幕画布上的用户输入（鼠标拖拽点击或者触摸事件）来修改相机的位置和方向。 它包含一些属性，可以启用/禁用某种用户输入，修改惯性、最小最大缩放距离等。

默认地，场景支持鼠标（电脑端）和手指触摸（移动端）交互，并且支持以下相机漫游方式：

| 鼠标操作    | 3D视图 | 2D视图 | 2.5D视图 |
| ----------- | ------ | ------ | -------- |
| 左键 + 拖拽 | 旋转   | 平移   | 平移     |
| 右键 + 拖拽 | 缩放   | 缩放   | 缩放     |
| 中键滚轮    | 缩放   | 缩放   | 缩放     |
| 中键 + 拖拽 | 倾斜   | 无操作 | 倾斜地球 |

[坐标系及坐标变换](http://mars3d.cn/dev/guide/map/crs.html)[时钟Clock及时序控制](http://mars3d.cn/dev/guide/map/clock.html)

- [1. map中视角相关设置和方法](http://mars3d.cn/dev/guide/map/camera.html#_1-map中视角相关设置和方法)
- [2. camera相机对象](http://mars3d.cn/dev/guide/map/camera.html#_2-camera相机对象)
- [2.1 平移位置](http://mars3d.cn/dev/guide/map/camera.html#_2-1-平移位置)
- [2.2 旋转朝向](http://mars3d.cn/dev/guide/map/camera.html#_2-2-旋转朝向)
- [2.3 平移位置+旋转朝向](http://mars3d.cn/dev/guide/map/camera.html#_2-3-平移位置-旋转朝向)
- [2. screenSpaceCameraController 鼠标相机控制器对象](http://mars3d.cn/dev/guide/map/camera.html#_2-screenspacecameracontroller-鼠标相机控制器对象)