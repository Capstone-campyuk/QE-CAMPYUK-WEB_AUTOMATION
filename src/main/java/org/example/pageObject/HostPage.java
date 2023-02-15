package org.example.pageObject;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HostPage {
    public static WebDriver driver;

    public HostPage (WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }

    //Click button add camp on addcamp page
    @FindBy(id = "btn-addcamp")
    private WebElement btnAddCamp;
    public void clickBtnAddCamp(){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", btnAddCamp);
        btnAddCamp.click();
    }

    @FindBy(id = "btn-addcamp")
    private WebElement btnaddNowEnabled;
    public boolean  clickBtnaddNowEnabled(){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", btnaddNowEnabled);
        return btnaddNowEnabled.isEnabled();
    }
    //input field title
    @FindBy(id = "input-title")
    private WebElement fieldTitle;
    public void inputTitle(String title){
        fieldTitle.sendKeys(title);
    }
    //input price
    @FindBy(id = "input-price")
    private WebElement fieldPrice;
    public void inputPrice(String price){
        fieldPrice.sendKeys(price);
    }

    //input Description
    @FindBy(id = "add-camp-description")
    private WebElement fieldDescription;
    public void inputDescription(String description){
        fieldDescription.sendKeys(description);
    }

//    //leaflet marker
//    @FindBy(xpath = "img[@alt='Marker']")
//    private WebElement leafletMarker;
//    public void moveMarkerLocation(){
//        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", leafletMarker);
//        leafletMarker.click();
//    }

    //input City
    @FindBy(id = "input-city")
    private WebElement fieldCity;
    public void inputCity(String city){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", fieldCity);
        fieldCity.sendKeys(city);
    }

    //input Address
    @FindBy(id = "input-address")
    private WebElement fieldAddress;
    public void inputAddress(String address){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", fieldAddress);
        fieldAddress.sendKeys(address);
    }

    //input Distance
    @FindBy(id = "input-distance")
    private WebElement fieldDistance;
    public void inputDistance(String distance){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", fieldDistance);
        fieldDistance.sendKeys(distance);
    }

    //upload image
    String pathImage = System.getProperty("user.dir")+"\\src\\test\\resources\\image\\";
    @FindBy(id = "input-image")
    private WebElement fieldImage;
    public void ClickUpdatePhoto(String hostPhoto){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", fieldImage);
        fieldImage.sendKeys(pathImage+hostPhoto);
    }

    //upload image
    @FindBy(id = "input-license")
    private WebElement fieldBusinessLicense;
    public void updateBusinessLicense(String businessLicense){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", fieldBusinessLicense);
        fieldBusinessLicense.sendKeys(pathImage+businessLicense);
    }

    @FindBy(id = "btn-bookings")
    private WebElement btnBookingList;
    public void clickBtnBokingList(){
        btnBookingList.click();
    }

    @FindBy(id = "edit-camp-page")
    private WebElement displayEditCamp;
    public boolean getDisplayEditCamp(){
       return displayEditCamp.isDisplayed();
    }


    @FindBy(xpath = "(//a[@id='btn-edit'])[2]")
    private WebElement btnEdit;
    public void clickBtnEdit(){
        btnEdit.click();
    }
    @FindBy(id = "btn-updatecamp")
    private WebElement btnUpdateCamp;
    public void clickBtnUpdateCamp(){
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", btnUpdateCamp);
        btnUpdateCamp.click();
    }

    @FindBy(id = "edit-tent")
    private WebElement btnAddImage;
    public void clickBtnAddImage() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", btnAddImage);
        btnAddImage.click();

    }
    @FindBy(id = "btn-add-tent")
    private WebElement btnUpdateImg;
    public void clickUpdateImage() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", btnUpdateImg);
        btnUpdateImg.click();

    }


    @FindBy(css = ".px-14 > div:nth-of-type(1) #delete-image")
    private WebElement DeleteImage;
    public void clickDeleteImage() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", DeleteImage);
        DeleteImage.click();
    }
    @FindBy(css = ".swal2-confirm")
    private WebElement PopDeleteImage;
    public void clickPopUp() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", PopDeleteImage);
        PopDeleteImage.click();
    }
    @FindBy(css = "tbody > tr:nth-of-type(1) #btn-delete")
    private WebElement DeleteItems;
    public void clickDeleteItems() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", DeleteItems);
        DeleteItems.click();

    }
    @FindBy(id = "btn-cancelupdate")
    private WebElement cancelUpdate;
    public void clickCancelUpdate() {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", cancelUpdate);
        cancelUpdate.click();

    }

    @FindBy(id = "orderhost-page")
    private WebElement displayOrerHostPage;
    public boolean getDisplayBookinglist(){
        return displayOrerHostPage.isDisplayed();
    }

}

