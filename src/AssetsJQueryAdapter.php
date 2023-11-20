<?php

namespace hive\widget;

use yii\web\AssetBundle;

/**
 * Class AssetsJQueryAdapter
 * @package hive\widget
 */
class AssetsJQueryAdapter extends AssetBundle
{
    public $sourcePath = '@hive/ckeditor/editor/adapters';

    public $js = [
        'jquery.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
        'hive\ckeditor\Assets'
    ];
}