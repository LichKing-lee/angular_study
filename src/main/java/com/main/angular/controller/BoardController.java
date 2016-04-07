package com.main.angular.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by ChangYong on 2016. 4. 2..
 */
@Controller
public class BoardController {
    @Autowired
    BoardService boardService;

    @RequestMapping("/getBoard")
    @ResponseBody
    public List<BoardVo> getBoard(){


        return boardService.getBoardList();
    }
}
