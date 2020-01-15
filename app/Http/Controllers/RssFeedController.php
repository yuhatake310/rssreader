<?php

namespace App\Http\Controllers;

use App\RssFeed;
use Illuminate\Http\Request;

class RssFeedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $url = RssFeed::first()->value('url');
        $xml = file_get_contents($url);
        $xmlObject = simplexml_load_string($xml);

        return response()->json($xmlObject, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rssfeed = new RssFeed;
        $rssfeed->url = $request->url;
        $rssfeed->save();

        return response()->json($rssfeed, 201);
    }
}
