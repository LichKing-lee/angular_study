package com.main.angular.controller;

import com.main.angular.service.BoardService;
import com.main.angular.vo.BoardVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @RequestMapping("/insertBoard")
    @ResponseBody
    public List<BoardVo> insertBoard(@RequestParam("title") String title,
                            @RequestParam("contents") String contents,
                            @RequestParam("writeName") String writeName){
        boardService.addBoard(new BoardVo(title, contents, writeName));

        return boardService.getBoardList();
    }
}
