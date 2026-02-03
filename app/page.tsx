export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", lineHeight: 1.6 }}>
      <section style={{ padding: "6rem 2rem", textAlign: "center" }}>
        <h1>Freshly Baked. Thoughtfully Brewed.</h1>
        <p>
          Every morning starts with warm ovens, slow fermentation, and coffee
          brewed with intention.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
        <h2>About</h2>
        <p>
          At our cafe and bakery, everything begins before sunrise. Dough is
          mixed by hand, pastries are shaped in small batches, and coffee is
          brewed fresh throughout the day.
        </p>
        <p>
          Our space is calm, welcoming, and familiar — a place for routines,
          conversations, and quiet breaks.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#f6f6f6" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2>Baked Fresh Daily</h2>
          <p>
            From buttery croissants to soft breads and seasonal treats, our
            bakery case changes throughout the day. Simple ingredients, done
            well.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
        <h2>Coffee</h2>
        <p>
          Thoughtfully sourced, carefully brewed. From bold espresso to smooth
          milk-based drinks, every cup is prepared with care.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <p>Come in for something warm, something fresh, or a good cup of coffee.</p>
      </section>
    </main>
  );
}
