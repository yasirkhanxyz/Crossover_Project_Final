import {CommonPageHelper} from '../common/common-page.helper';
import {By, element} from "protractor";

export class LoginPageHelper extends CommonPageHelper {
   public async goToPage() {
        return super.goTo('/mail');
                  }

    public async SignInlabel() {
        return element(By.id("headingText")).getText();
    }
    
    public async LoggedIn(){
       return element(By.id("gbqfb")).isPresent();
    }

    public async signoutbtn(){
        return element(By.className("gb_Ea gb_1f gb_8f gb_Oe gb_Jb")).isPresent();
    }
    
    public async Userclick(){
       return element(By.className("agb_db gbii")).isPresent();
    }
    
}
