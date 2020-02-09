<?php

use Illuminate\Http\Request;

Route::resource('rssfeeds', 'RssFeedController', ['only' => ['index', 'store']]);
