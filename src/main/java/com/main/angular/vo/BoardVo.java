package com.main.angular.vo;

import lombok.Data;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by ChangYong on 2016. 4. 7..
 */
@Data
public class BoardVo {
    private String title;
    private String contents;
    private String writeDate;
    private String writeName;

    public BoardVo(String title, String contents, String writeName){
        this.title = title;
        this.contents = contents;

        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String date = format.format(new Date());

        this.writeDate = date;
        this.writeName = writeName;
    }
}
