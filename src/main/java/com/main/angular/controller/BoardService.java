package com.main.angular.controller;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ChangYong on 2016. 4. 7..
 */
@Service
public class BoardService {
    private List<BoardVo> boardList = new ArrayList<BoardVo>();

    public void addBoard(BoardVo boardVo){
        this.boardList.add(boardVo);
    }

    public List<BoardVo> getBoardList(){
        return this.boardList;
    }
}
