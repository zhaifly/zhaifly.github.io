## Zhai Feiyue
============

## **INFORMATION**
---------
* ### 学历 -- &nbsp;&nbsp; 硕士
* ### 学校 -- &nbsp;&nbsp; Shang Hai University
* ### 方向 -- &nbsp;&nbsp; 图像处理在机电工程中的应用
* ### 邮箱 -- &nbsp;&nbsp; 383264079@qq.com
* ### 手机 -- &nbsp;&nbsp; 15721170461

## **EDUCATION**
---------
* ### 2012/09 - 2015/06 -- &nbsp;&nbsp; 硕士 &nbsp;&nbsp; Shang Hai University &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 机械电子工程               
* ### 2012/09 - 2015/06 -- &nbsp;&nbsp; 学士 &nbsp;&nbsp; 河南工业大学 &nbsp;&nbsp; 机械设计制造及其自动化      

## **WORK EXPRIENCE**
----------
* ### 2015/06 - Now -- &nbsp;&nbsp; **Intel** &nbsp;&nbsp; Flex 
* ### &nbsp;&nbsp; 第一职责 (2015/06 - 2017/05) -- **Software Engineer** &nbsp;&nbsp; (2017/05 - 至今) -- **Machine Learning Engineer**
* ### &nbsp;&nbsp; 第二职责 (2017/01 - 2018/04) -- **GEAR China PAS Lead(12人)** (2018/04 - 至今) -- **GEAR China Lead(24人)**

## **SKILLS**
* ### 编程语言 -- &nbsp;&nbsp; **Python**, Javascript, C/C++/C#, Golang
* ### 并行计算 -- &nbsp;&nbsp; OpenMP, OpenBlas, MKL, OpenCL，MKLDNN
* ### 机器学习 -- &nbsp;&nbsp; PaddlePaddle<sub>*(RNN)*</sub>, Caffe, PyTorch, OpenCV, R<sub>*(自学无项目经验)*</sub>
* ### WEB开发 -- &nbsp;&nbsp;  Nginx; Flask, Express; Redis; SQL

## **PROJECTS**
--------------------
* ### 2015/06 - 2015/12 -- &nbsp;&nbsp; **SBA Next**
#### 基于 .NET 平台实现两个工具：1). 动态更新服务器IP到DNS 服务器上；2). 通过UPnP协议动态修改 NAT 设备的端口映射。

* ### 2016/01 - 2016/05 -- &nbsp;&nbsp; **Rack Scale Architecture**
#### 为浪潮实现基于 Python 的多芯片管理中间件，获取，处理 PSME 的数据并且为上层提供统一的API。在 ARM 平台上做优化以实现产品化。

* ### 2016/06 - 2017/06 -- &nbsp;&nbsp; **Intel Remote EyeSight**
#### 设计并实现了 IRES 后端架构：Nginx 代理静态资源文件，Nginx 7 层负载均衡，基于 Intel Collaboration Suit 的流处理服务，基于 Socket.IO 实时数据通讯，基于 Redis MySQL 缓存层设计，Reset API 认证，MQTT集成，基于 RabbitMQ 的 RPC 设计，基于 D3 的数据可视化。IRES architecture design: Nginx for static files, websocket for real-time data exchange, caching data with Redis for database, reset API authorization, level 7 load balance, MQTT integration, RPC design base on RabbitMQ, Intel collaboration Suit for audio video streaming and nvd3 for data visualization.

* ### 2017/06 - 2017/12 -- &nbsp;&nbsp; **Baidu RNN Workloads Optimization On Xeon**
#### 项目背景：在 Intel Xeon 平台上通过使用 [AVX](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions) 指令，[Intel Intrinsics](https://software.intel.com/sites/landingpage/IntrinsicsGuide/)，[MKL](https://software.intel.com/en-us/mkl)，[MKLDNN](https://github.com/intel/mkl-dnn) 和 [OpenMP](https://en.wikipedia.org/wiki/OpenMP) 来帮助百度优化开源深度学习框架 [PaddlePaddle](https://github.com/PaddlePaddle/Paddle) 底层的三个基于 C++ 实现的算法模块 [Vanilla RNN](https://en.wikipedia.org/wiki/Recurrent_neural_network), [GRU](https://en.wikipedia.org/wiki/Gated_recurrent_unit) 和 [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) 的性能。最终实现在 [Deep Speech 2](https://github.com/PaddlePaddle/DeepSpeech) case 下 (小Batch)，CPU (Skylake 8180 * 2) 版本性能超过 GPU (Nvidia TITANX)版本。Do C++ primitives optimization (target on small batch size) on PaddlePaddle, a deep learning framework target on NLP, NMT etc. from Baidu, with Intel MKL cblas pack gemm, MKLDNN, AVX and Open MP. Implement three layers: vanilla RNN, Gated Recurrent Layer and LSTM Layer, which (skylake 8180*2) has better performance than Nvidia GPU (TITAN X) in scenario of deep speech 2 model. Finally to influence Baidu use Intel Xeon to do inference.

* ### 2018/02 - 至今 -- &nbsp;&nbsp; **Datacenter Manager**
#### 项目背景：一套数据中心管理软件，日常维护，功能实现，为DELL 和 LENOVO 做定制化。

## **INNOVATION**
--------------------
* ### 2015/10 - 2015/11 -- &nbsp;&nbsp; **OpenCL DES Demo**
#### 硬件环境搭建：实现基于多线程和OpenCL的DES 算法，并且做benchmark比较。Hardware purchase and setup, Demo UI (winfrom) and test script (windows shell) implementation, command line interface design, and DES with multi-thread implementation (c++).

* ### 2015/12 - 2016/05 -- &nbsp;&nbsp; **SOFIA 3GR 代码静态扫描**			
#### 用 Bash 和 Python 为 SOFIA 3GR 组 搭建了一套基于 Klockwork 的自动化静态代码扫描环境。Setup an code scan environment with Python and Bash, which can fetch, scan code and generate result with Excel format, then E-mailed to PM automatically

* ### 2016/03 - 2016/04 -- &nbsp;&nbsp; **WebVR Demo**
#### 实现基于Aframe 的web VR reader，用于在VR 场景中阅读网页，并且用Intel XDK打包，最终运行在 Intel Sofia 平台上。

Build (with Intel XDK) a webVR demo (RSS reader) base on aframe.js (JavaScript framework from Mozilla), and running on SOFIA 3GR platform.

* ### 2017/04 - 2017/09 -- &nbsp;&nbsp; **3D CNN Demo**
#### 证明在相同的算法下，单纯提高样本的采样分辨率是否有益于肺结节检测精度。 网络使用 Res18net做特征提取，并且训练了一个RPN (PyTorch) 用于搜索结节的proposal，移植 PyTorch 版本的网络到 Intel Caffe（KNL支持384G内存）上测试不同的分辨率 (64, 128, 192) 的精度，精准度和召回率。The target of Tian Chi AI competition, host by Intel and Ali Yun, is to prove that in the deep learning field KNL platform has the same performance with NVidia GPU but consume low cost. The competition aims to develop lung cancer detection algorithms (determine when lesions in the lungs are cancerous), which based on 3D-CNN network such as 3D Vnet, 3D Unet. All my work include: Environment setup (anaconda, jupyter notebook, Intel-extended Caffe), data preprocessing with Python (datasets collection, read DICOMs, pixel Convert to HU, resampling, Normalization), data augmentation, training.

* ### 2018/01 - 至今 -- &nbsp;&nbsp; **[Heartbeat Sounds](https://www.kaggle.com/kinguistics/heartbeat-sounds)**
#### 研究心音信号处理，心音信号特征提取，用机器学习做心音分类。

* ### 2018/04 - 2018/06 -- &nbsp;&nbsp; **DiagVR** (I2R)
#### 内部创业项目，用深度学习 (resnet18) 来检测肺结节(数据来自 LUNA16， Kaggle，天池)，将检测结果在VR中呈现(VTK 重构肺部图像).
