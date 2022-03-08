import {Checkout as SourceCheckout} from "SourceRoute/Checkout/Checkout.component"
import {ContentWrapper as ContentWrapper} from "SourceComponent/ContentWrapper/ContentWrapper.component";
import ProgressBar from "../../components/ProgressBar";
import "./Checkout.extension.style.scss";

class Checkout extends SourceCheckout{


    render() {
      
        return (
            <>
            <ProgressBar stepMap={this.stepMap}/>
            <main block="Checkout">
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
            </>
        );
    }

}
export default Checkout