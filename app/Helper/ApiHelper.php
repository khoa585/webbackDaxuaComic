<?php

namespace App\Helper;

class ApiHelper{
    public static function createApiHelper($is_error,$code,$message,$content){
        $result = [];
        if($is_error){
            $result['status'] = "error";
            $result['code'] = $code;
            $result['message'] = $message;
        }else{
            $result['status'] = "success";
            $result['code'] = $code;
           if($content == null){
            $result['message'] = $message;
           }else{
            $result['data'] = $content;
           }
        }
        return $result;
    }
}
