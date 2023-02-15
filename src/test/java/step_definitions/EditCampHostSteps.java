package step_definitions;

import cucumber.api.java.en.And;
import org.example.pageObject.HostPage;
import org.openqa.selenium.WebDriver;

public class EditCampHostSteps {
    private WebDriver webDriver;

    public EditCampHostSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }


    @And("Host click edit Camp")
    public void hostClickAddCampButton() {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickBtnEdit();
        hostPage.getDisplayEditCamp();
    }


    @And("Host edit Title \"(.*)\", Price \"(.*)\", Description \"(.*)\"")
    public void hostEditInputData(String title, String price, String description)throws InterruptedException {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.inputTitle(title);
        hostPage.inputPrice(price);
        hostPage.inputDescription(description);
        Thread.sleep(3000);
}
    @And("Host click update camp")
    public void hostClick() {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickBtnUpdateCamp();
    }
    @And("Host add edit an image \"(.*)\"")
    public void hostAddImg(String photo)throws InterruptedException {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickBtnAddImage();
        hostPage.ClickUpdatePhoto(photo);
        hostPage.clickUpdateImage();
        Thread.sleep(5000);
        hostPage.clickPopUp();
    }

    @And("Host delete the old image")
    public void hostDelete()throws InterruptedException {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickDeleteImage();
        hostPage.clickPopUp();
        Thread.sleep(4000);
    }
    @And("Host delete the old items")
    public void hostDeleteItm()throws InterruptedException {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickDeleteItems();

        Thread.sleep(4000);
    }
    @And("Host Cancel Update")
    public void hostCancelUpdate() {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickCancelUpdate();
    }



}
