package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogInPage {
    //Dibuat hanya 1 file java utk find elemen (user,admin,Host) jika elemnnya sama
    public static WebDriver driver;

    public LogInPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }
    @FindBy(xpath = "//h1[@class='font-extrabold antialiased text-2xl']")
    private WebElement header;
    public boolean getHeader(){
        return header.isDisplayed();
    }

    @FindBy(xpath = "//button[@id='btn-login']")
    private WebElement loginButtonLp;
    public void clickLoginLandingPage(){
        loginButtonLp.click();
    }


    @FindBy(xpath = "//input[@id='input-username']")
    private WebElement userName;
    public void setUserName(String user){
        userName.sendKeys(user);
    }
    @FindBy(xpath = "//input[@id='input-password']")
    private WebElement password;
    public void setPassword(String pwd){
        password.sendKeys(pwd);
    }

    @FindBy(xpath = "//button[@id='btn-login']")
    private WebElement loginButton;
    public void clickLogin(){
        loginButton.click();
    }

    @FindBy(id = "btn-home")
    private WebElement header2;
    public boolean getHeader2(){
        return header2.isDisplayed();
    }
    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled']")
    private WebElement loginOk;
    public void clickOk(){
        loginOk.click();
    }

    @FindBy(xpath = " //div[@class='swal2-html-container']  ")
    private WebElement errorMessage;

    public String getErrorText(){
        return errorMessage.getText();
    }

    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled']")
    private WebElement btnErrorMessage;

    public void clickOkErrorMessage(){
        btnErrorMessage.click();
    }

    // host

    @FindBy(xpath = "//div[@class='swal2-popup swal2-modal swal2-show']")
    private WebElement headerHost;
    public boolean getHeaderHost(){
        return headerHost.isDisplayed();
    }

    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled']")
    private WebElement clickOkHost;
    public void clickOkHost(){
        clickOkHost.click();
    }

    // Admin

    @FindBy(xpath = "//div[@class='swal2-popup swal2-modal swal2-show']")
    private WebElement headerAdmin;
    public boolean getHeaderAdmin(){
        return headerAdmin.isDisplayed();
    }
    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled']")
    private WebElement clickOkAdmin;
    public void clickOkAdmin(){
        clickOkAdmin.click();
    }


}
