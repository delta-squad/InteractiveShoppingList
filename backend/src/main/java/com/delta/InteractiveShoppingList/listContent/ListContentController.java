package com.delta.InteractiveShoppingList.listContent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("")
public class ListContentController {

    @Autowired
    ListContentService listContentService;

    @GetMapping("/{listId}/listContent")
    public ArrayList<ListContentShowDTO> getListContentsById(@PathVariable Long listId) {
        return listContentService.getListOfContentsById(listId);
    }

    @PostMapping("/listContent")
    public Long add(@RequestBody ListContentDTO listContentDTO) {
        return listContentService.add(listContentDTO);
    }
}
