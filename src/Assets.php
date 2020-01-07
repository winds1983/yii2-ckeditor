<?php

namespace hive\ckeditor;

use yii\web\AssetBundle;

/**
 * Class Assets
 * @package hive\ckeditor
 */
class Assets extends AssetBundle
{
    public $sourcePath = '@hive/ckeditor/editor';

    public $js = [
        'ckeditor.js',
        'js.js',
    ];

    public $depends = [
        'yii\web\YiiAsset',
    ];
}