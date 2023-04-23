package com.example.stylify.model;

public class User {
    private Integer customerId;
    private String email;
    private String username;
    private String password;
    private Boolean isAdmin;

    public User(Integer customerId, String email, String username, String password, Boolean isAdmin) {
        this.customerId = customerId;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    public Integer getCustomer_id() {
        return customerId;
    }

    public void setCustomer_id(Integer customerId) {
        this.customerId = customerId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }
}
