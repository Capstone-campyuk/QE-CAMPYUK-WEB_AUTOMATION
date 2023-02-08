package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class RegisterPage {
    public static WebDriver driver;
    public RegisterPage(WebDriver driver){
        PageFactory.initElements(driver,this);
        this.driver = driver;
    }
    @FindBy(id = "landing-page")
    private WebElement pageLanding;

    @FindBy(id = "btn-login")
    private WebElement btnLogin;

    @FindBy(id = "btn-register")
    private WebElement btnRegister;

    @FindBy(id = "register-page")
    private WebElement pageRegister;

    @FindBy(id = "input-role")
    private WebElement selectRoleRegister;

    @FindBy(id = "input-username")
    private WebElement userName;

    @FindBy(id = "input-fullname")
    private WebElement fullName;

    @FindBy(id = "input-email")
    private WebElement email;

    @FindBy(id = "input-password")
    private WebElement password;

    @FindBy(id = "swal2-html-container")
    private WebElement popUpMessage;
    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled']")
    private WebElement btnPopUp;

    public boolean landingPageIsDisplayed(){
        return pageLanding.isDisplayed();
    }

    public void clickLogin(){
        btnLogin.click();
    }

    public void clickRegister(){
        btnRegister.click();
    }

    public boolean registerPageIsDisplayed(){
        pageRegister.isDisplayed();
        return true;
    }

    public void selectBtnRoleRegister(String typeRoleRegister) throws InterruptedException {
        Select b = new Select(selectRoleRegister);
        b.selectByVisibleText(typeRoleRegister);
        Thread.sleep(2000);
    }

    public void setUserName(String inputUserName){
        userName.sendKeys(inputUserName);
    }

    public void setFullName(String inputFullName){
        fullName.sendKeys(inputFullName);
    }
    public void setEmail(String inputEmail){
        email.sendKeys(inputEmail);
    }
    public void setPassword(String inputPassword){
        password.sendKeys(inputPassword);
    }
    public String getPopUpMessage(){
        return popUpMessage.getText();
    }
    public void clickBtnPopUp(){
        btnPopUp.click();
    }
}
