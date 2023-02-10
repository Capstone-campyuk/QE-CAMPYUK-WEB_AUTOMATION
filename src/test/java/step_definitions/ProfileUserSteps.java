package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.example.pageObject.LogInPage;
import org.example.pageObject.UserPage;
import org.openqa.selenium.WebDriver;

public class ProfileUserSteps {
    private WebDriver webDriver;

    public ProfileUserSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User click profile button")
    public void ProfileButton(){
        UserPage userPage = new UserPage(webDriver);
        userPage.clickProfile();
        userPage.getProfile();
    }
    @And("User click update button")
    public void UpdateButton(){
        UserPage userPage = new UserPage(webDriver);
        userPage.clickUpdate();

    }

    @When("User input\"(.*)\"as fullName and input\"(.*)\" as userName and input\"(.*)\"as email and input\"(.*)\"as image")
    public void inputUpdate(String fullName,String userName,String email,String photo) throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.UpdateFullName(fullName);
        userPage.UpdateUserName(userName);
        userPage.UpdateEmail(email);
        userPage.UpdatePhoto(photo);
        userPage.buttonSave();
        Thread.sleep(6000);

    }

}
