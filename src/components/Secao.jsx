import reactLogo from "../assets/react.svg";

export default function Secao(props) {

    let reactAlt = "React Logo"

    return (
      <>
      <section>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto obcaecati natus ex!
        Fugiat veniam pariatur reprehenderit quaerat aliquam neque recusandae? Temporibus deleniti
        dolores molestias quis earum eos voluptate! Animi, minus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto obcaecati natus ex!
        Fugiat veniam pariatur reprehenderit quaerat aliquam neque recusandae? Temporibus deleniti
        dolores molestias quis earum eos voluptate! Animi, minus?
      </p>
      <img src={reactLogo} alt={reactAlt} />
      <img src={props.viteLogoProps} alt={props.viteAltProps} />
        </section>
        </>
    );
  }
  