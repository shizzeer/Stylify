package com.example.stylify.model;

public class Tag {
    private final Integer tagId;
    private String name;

    public Tag(Integer tagId, String name) {
        this.tagId = tagId;
        this.name = name;
    }

    public Integer getTagId() {
        return tagId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
