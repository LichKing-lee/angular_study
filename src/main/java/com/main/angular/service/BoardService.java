package com.main.angular.service;

import com.main.angular.vo.BoardVo;
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

    public BoardVo getBoard(int boardIdx) {
        return boardList.get(boardIdx);
    }

    public void removeBoard(int boardIdx) {
        boardList.remove(boardIdx);
    }
}
