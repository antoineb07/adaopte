import Button from "./Button";
import { Link } from "react-router-dom";

export default function AnyQuestion() {
    return (
        <nav className="ready-to-a-life pb-5 md:pb-15 md:pt-10 bg-primary">
      <h2 className="font-heading items-center flex justify-center text-xl md:text-6xl pb-10">
        Des questions ?
      </h2>
      <p className="text-deep-grey text-center text-xs md:text-xl pb-10">
        Nous sommes là pour répondre à toutes vos interrrogations concernant le bénévolat chez Adaopte. N'hésitez pas à nous contacter pour en savoir plus sur notre démarche.

      </p>
      <nav className="btn flex justify-center gap-6">
        <div className="btnadop">
          <Link to="/">
            <Button variant="primary" size="responsive">Foire aux questions</Button>
          </Link>
        </div>
        <div className="btnDon">
          <Link to="/">
            <Button variant="secondary" size="responsive">Contactez-nous</Button>
          </Link>
        </div>
    
      </nav>
    </nav>
    )
}