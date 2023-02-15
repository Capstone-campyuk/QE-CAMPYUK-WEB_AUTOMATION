package org.example.pageObject;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdminPage {

    public static WebDriver driver;

    public AdminPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }

    @FindBy(xpath = "(//*[@id='btn-check'])[1]")
    private WebElement clickCheckAdmin;
    public void buttonCheckDetailAdmin(){
        clickCheckAdmin.click();
    }
    @FindBy(xpath = "//h1[@class='text-2xl lg:text-4xl']")
    private WebElement headerAdminDetail;
    public boolean getHeaderAdminDetail(){
        return headerAdminDetail.isDisplayed();
    }
    @FindBy(xpath = "//a[.='Download Business License']")
    private WebElement downloadLisensi;
    public void clickDownloadLisensi(){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", downloadLisensi);
        downloadLisensi.click();
    }

    @FindBy(id = "btn-accept")
    private WebElement acceptAdmin;
    public void clickAcceptAdmin(){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", acceptAdmin);
        acceptAdmin.click();
    }

    @FindBy(id = "btn-decline")
    private WebElement declineAdmin;
    public void clickDeclineAdmin(){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", declineAdmin);
        declineAdmin.click();
    }


}
