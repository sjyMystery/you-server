<?php

/**
 * Yaf_Response_Http Document
 *
 * @package Yaf
 * @author Leelmes <i@chengxuan.li>
 */
class Yaf_Response_Http extends Yaf_Response_Abstract
{

    const DEFAULT_BODY = 'content';
    protected $_header;

    protected $_body;

    protected $_sendheader = true;

    protected $_response_code = 0;

    public function __construct()
    {
    }

    public function setAllHeaders($headers)
    {
    }

    public function getHeader($name = null)
    {
    }

    public function setHeader($name, $value, $rep = null, $response_code = null)
    {
    }

    public function clearHeaders()
    {
    }

    public function setRedirect($url)
    {
    }

    public function response()
    {
    }

    public function __destruct()
    {
    }

    public function __toString()
    {
    }

    public function appendBody($body, $name = null)
    {
    }

    public function prependBody($body, $name = null)
    {
    }

    public function clearBody($name = null)
    {
    }

    public function getBody($name = null)
    {
    }

    public function setBody($body, $name = null)
    {
    }

    private function __clone()
    {
    }

}
