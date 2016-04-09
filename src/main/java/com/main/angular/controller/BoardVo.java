package com.main.angular.controller;

import lombok.Data;

/**
 * Created by ChangYong on 2016. 4. 7..
 */
@Data
public class BoardVo {
    private String title;
    private String contents;
    private String writeDate;
    private String writeName;

    public BoardVo(String title, String contents, String writeDate, String writeName){
        this.title = title;
        this.contents = contents;
        this.writeDate = writeDate;
        this.writeName = writeName;
    }
}
