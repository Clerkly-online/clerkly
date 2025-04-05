import React from "react";
import "./App.css";

function App() {
  
            <h3 className="text-xl font-bold">Fristen merken & erinnern</h3>
            <p className="mt-2">Clerkly bewahrt dich vor verpassten Rückgaben, Zahlungen und Deadlines.</p>
          </div>
        </div>
      </section>







              
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Warum Clerkly?</h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-left">
          <li>✅ Du musst keine Briefe mehr schreiben.</li>
          <li>✅ Du verstehst, was in deinen Dokumenten steht.</li>
          <li>✅ Du verpasst nie wieder eine Frist.</li>
          <li>✅ Du sparst Nerven, Zeit und Geld.</li>
        </ul>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Preise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-300 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p>3 Dokumentanalysen pro Monat</p>
            <p className="mt-2 font-semibold">0 € / Monat</p>
          </div>
          <div className="bg-orange-100 border border-orange-300 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p>Unbegrenzte Dokumente + Premium KI-Schreiben</p>
            <p className="mt-2 font-semibold">6,99 € / Monat</p>
          </div>
          <div className="bg-orange-200 border border-orange-400 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Ultimate</h3>
            <p>Autokündigungen + Familienmodus + Support</p>
            <p className="mt-2 font-semibold">9,99 € / Monat</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <h3 className="text-2xl font-bold">Trag dich jetzt ein – Clerkly kommt bald!</h3>
        <form className="mt-4 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center">
          <input type="email" placeholder="Deine E-Mail" className="w-full sm:w-auto p-3 rounded-l-full text-black" />
          <button className="bg-orange-500 px-6 py-3 rounded-r-full font-semibold hover:bg-orange-600 mt-2 sm:mt-0">
            Eintragen
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-400">© 2025 Clerkly. Papierkram? Geklärt.</p>
      </footer>
    </div>
  );
}

export default App;
