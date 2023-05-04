package com.example.stylify.dto;

public class CustomerDTO extends UserDTO {
    private String firstName;
    private String lastName;
    private String country;
    private String city;
    private String zipCode;
    private String phoneNumber;
    private double balance = 5000;

    public CustomerDTO(String username, String password, String email, String firstName,
                       String lastName, String country, String city, String zipCode,
                       String phoneNumber, double balance) {
        super(username, password, email);
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.city = city;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.balance = balance;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
