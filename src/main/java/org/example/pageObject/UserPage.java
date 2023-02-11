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
//hari ini

    @FindBy(css = "[d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z']")
    private WebElement loadButton;
    public void clickload(){
        loadButton.click();
    }
    @FindBy(xpath = "//a[@href='/camp/108']/button[@id='btn-detail']")
    private WebElement checkButton;
    public void clickCheck(){
        checkButton.click();
    }
    @FindBy(xpath = "//h1[.='Pondok Genggong']")
    private WebElement campSiteDetail;
    public boolean getCampsiteDetail(){
        return campSiteDetail.isDisplayed();
    }

    @FindBy(xpath = "//h1[@class='flex text-2xl lg:w-1/3']")
    private WebElement campSiteDetail2;
    public boolean getCampsiteDetail2(){
        return campSiteDetail2.isDisplayed();
    }

    @FindBy(id = "btn-reserve")
    private WebElement checkReserve;
    public void clickReserve(){
        checkReserve.click();
    }
    @FindBy(xpath = "//h1[.='Order']")
    private WebElement order;
    public boolean getOrderHeader(){
        return order.isDisplayed();
    }





    // profile feature element dan method

    @FindBy(xpath = "//ul[@class='flex gap-8']/a[@id='btn-profilelg']")
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

    @FindBy(xpath = "//label[@id='remove-profil']//div[@class='w-1/2 text-lg mx-10 capitalize bg-btn border-none shadow-lg text-white font-semibold rounded-lg btn hover:bg-btnh']")
    private WebElement clickRemoveButton;
    public void removeButton(){
        clickRemoveButton.click();
    }

    @FindBy(xpath = "//h2[@class='swal2-title']")
    private WebElement popUpConfirmationRemove;
    public boolean getPopUpConfirmationRemove(){
        return popUpConfirmationRemove.isDisplayed();
    }


    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled swal2-default-outline']")
    private WebElement clickRemoveButtonConfirmationYes;
    public void removeButtonConfirmationYes(){
        clickRemoveButtonConfirmationYes.click();
    }
    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled swal2-default-outline']")
    private WebElement clickRemoveButtonConfirmationNo;
    public void removeButtonConfirmationNo(){
        clickRemoveButtonConfirmationNo.click();
    }
    @FindBy(id = "login-page")
    private WebElement loginHeaderPageBack;
    public boolean getLoginPageHeaderBack(){
        return loginHeaderPageBack.isDisplayed();
    }





    //my booking elements
    @FindBy(xpath = "//ul[@class='flex gap-8']/a[@id='btn-bookinglg']")
    private WebElement clickMyBooking;
    public void buttonMyBooking(){
        clickMyBooking.click();
    }

    @FindBy(id = "orderhost-page")
    private WebElement bookingHeader;
    public boolean getMyBookingHeader(){
        return bookingHeader.isDisplayed();
    }
    @FindBy(xpath = "//a[contains(.,'babi panggang karo HorasDates2023-02-12 - 2023-02-13E-TicketINV-68-20230210-1756')]")
    private WebElement clickDetailBooking;
    public void buttonDetailBooking(){
        clickDetailBooking.click();
    }

    @FindBy(id = "orderhost-page")
    private WebElement bookingHeaderDetail;
    public boolean getMyBookingHeaderDetail(){
        return bookingHeader.isDisplayed();
    }
    @FindBy(id = "btn-cancel")
    private WebElement clickCancelBooking;
    public void buttonCancelBooking(){
        clickCancelBooking.click();
    }







//    @FindBy(xpath = "") //belum
//    private WebElement clickCancelButton;
//    public void buttonCancel(){
//        clickCancelButton.click();
//    }
//









}
