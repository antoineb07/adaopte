import Button from "./Button";
import { Link } from "react-router-dom";

export default function AnyQuestion() {
    return (
        <nav className="ready-to-a-life pb-15 pt-10 bg-primary">
      <h2 className="title font-heading items-center flex justify-center text-6xl pb-10 font-bold">
        Des questions ?
      </h2>
      <p className=" mx-auto max-w-3xl text-center text-l text-deep-grey p-12 leading-relaxed">
        Nous sommes là pour répondre à toutes vos interrrogations concernant le bénévolat chez Adaopte. N'hésitez pas à nous contacter pour en savoir plus sur notre démarche.

      </p>
      <nav className="btn flex justify-center gap-6">
        <div className="btnadop">
          <Link to="/">
            <Button variant="primary" size="lg">Foire aux questions</Button>
          </Link>
        </div>
        <div className="btnDon">
          <Link to="/">
            <Button variant="secondary" size="lg">Contactez-nous</Button>
          </Link>
        </div>
    
      </nav>
    </nav>
    )
}