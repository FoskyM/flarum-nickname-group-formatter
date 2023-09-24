# Nickname Group Formatter

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/foskym/nickname-group-formatter.svg)](https://packagist.org/packages/foskym/nickname-group-formatter) 

A [Flarum](http://flarum.org) extension. 

适配 1.8 版本

### Usage

1. 在插件设置页面设置显示自定义昵称的地方
   
   ![Snipaste_2023-09-24_15-38-26](https://github.com/FoskyM/flarum-nickname-group-formatter/assets/39661663/21e30518-9c21-43bf-bfe5-77d13e76a5a3)
   
2. 在用户组页面设置自定义昵称格式
   
   ![Snipaste_2023-09-24_15-38-39](https://github.com/FoskyM/flarum-nickname-group-formatter/assets/39661663/f1794906-052f-4541-bf68-b70e052f2f5b)
   
3. 效果如图所示
   
   ![Snipaste_2023-09-24_15-38-52](https://github.com/FoskyM/flarum-nickname-group-formatter/assets/39661663/fa5783b8-2a43-4433-848c-5b05949b4518)

### Description

本插件从 DavidNery 的同名插件获得启发，其插件不适配新版本，我重写了一下，适配了 1.8 版本。

### Installation

Install with composer:

```sh
composer require foskym/nickname-group-formatter:"*"
```

### Updating

```sh
composer update foskym/nickname-group-formatter:"*"
php flarum migrate
php flarum cache:clear
```

### Links

- [Packagist](https://packagist.org/packages/foskym/nickname-group-formatter)
- [GitHub](https://github.com/foskym/flarum-nickname-group-formatter)
- [Original by DavidNery](https://github.com/DavidNery/flarum-nickname-group-formatter)
