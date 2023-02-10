package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UserPage {
    public static WebDriver driver;

    public UserPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }
    @FindBy(id = "btn-camplist")
    private WebElement exploreButton;
    public void clickExplore(){
        exploreButton.click();
    }
    @FindBy(id = "camplist-page")
    private WebElement campSiteDisplay;
    public boolean getCampsite(){
        return campSiteDisplay.isDisplayed();
    }

    @FindBy(xpath = "//img[@alt='https://res.cloudinary.com/djqjmzwsa/image/upload/v1675864273/campyuk/11287-20230208-135113.jpg']")
    private WebElement displayCamp1;
    public boolean getDisplayCamp1(){
        return displayCamp1.isDisplayed();
    }


    // profile feature element dan method

    @FindBy(id = "btn-profilelg")
    private WebElement profileButton;
    public void clickProfile(){
        profileButton.click();
    }

    @FindBy(id = "profil-page")
    private WebElement profileDisplay;
    public boolean getProfile(){
        return profileDisplay.isDisplayed();
    }
    @FindBy(xpath = "//label[@id='update-profil']//div[@class='w-1/2 text-lg mx-10 capitalize bg-btn border-none shadow-lg text-white font-semibold rounded-lg btn hover:bg-btnh'] ")
    private WebElement updateButton;
    public void clickUpdate(){
        updateButton.click();
    }

    @FindBy(id = "fullname-profil")
    private WebElement updateFullName;
    public void UpdateFullName(String fullName){
        updateFullName.sendKeys(fullName);
    }

    @FindBy(id = "username-profil")
    private WebElement updateUserName;
    public void UpdateUserName(String userName){
        updateUserName.sendKeys(userName);
    }
    @FindBy(id = "email-profil")
    private WebElement updateEmail;
    public void UpdateEmail(String email){
        updateEmail.sendKeys(email);
    }
    String pathImage = System.getProperty("user.dir")+"\\src\\test\\resources\\image\\";
    @FindBy(id = "edit-photo")
    private WebElement updatePhoto;
    public void UpdatePhoto(String userPhoto){
        updatePhoto.sendKeys(pathImage+userPhoto);
    }



    @FindBy(xpath = "//button[@class='btn bg-btn normal-case  border-none mx-1 hover:btnh text-white']")
    private WebElement clickSaveButton;
    public void buttonSave(){
        clickSaveButton.click();
    }

//    @FindBy(xpath = "") //belum
//    private WebElement clickCancelButton;
//    public void buttonCancel(){
//        clickCancelButton.click();
//    }
//









}
