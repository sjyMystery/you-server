<?php
/**
 * Swoole\Exception Document
 *
 * @author Leelmes <i@chengxuan.li>
 */

namespace Swoole;
class Exception extends \Exception implements \Throwable
{

    protected $message = '';
    protected $code = 0;
    protected $file;
    protected $line;

    public function __construct($message = null, $code = null, $previous = null)
    {
    }

    public function __wakeup()
    {
    }

    public function getMessage()
    {
    }

    public function getCode()
    {
    }

    public function getFile()
    {
    }

    public function getLine()
    {
    }

    public function getTrace()
    {
    }

    public function getPrevious()
    {
    }

    public function getTraceAsString()
    {
    }

    public function __toString()
    {
    }

    private function __clone()
    {
    }
}
