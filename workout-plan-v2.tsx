import { useState } from "react";

const workoutData = {
  Mo: {
    label: "Montag",
    focus: "Brust + Trizeps",
    color: "#FF6B35",
    tip: "Brust zuerst wenn du frisch bist. Beim Drücken Schulterblätter immer zusammenziehen — das schützt die Schulter.",
    exercises: [
      {
        name: "Dumbbell Bench Press",
        muscles: "Brust (gesamt)",
        sets: 4, reps: "10–12", kg: "16–18kg", rest: "90 Sek",
        execution: [
          "Flach auf Bank, Schulterblätter fest zusammenziehen",
          "Hanteln auf Brusthöhe, Ellbogen 45° vom Körper",
          "Explosiv hochdrücken bis Arme fast gestreckt",
          "Langsam 3 Sek runter bis tiefer Stretch",
        ],
      },
      {
        name: "Incline Dumbbell Press",
        muscles: "Obere Brust",
        sets: 3, reps: "10–12", kg: "14–16kg", rest: "90 Sek",
        execution: [
          "Bank auf 30–45°, Fokus obere Brust",
          "Explosiv hoch, langsam runter",
          "Schulterblätter zusammen halten",
          "Ellbogen leicht nach innen beim Drücken",
        ],
      },
      {
        name: "Cable Flyes (oder Dumbbell Flyes)",
        muscles: "Brust (Dehnung + Form)",
        sets: 3, reps: "12–15", kg: "10–12kg", rest: "60 Sek",
        execution: [
          "Arme leicht gebeugt, weiter Bogen",
          "Tiefer Stretch am untersten Punkt — kurz halten",
          "Zusammenführen wie Umarmung schliessen",
          "Gefühl wichtiger als Gewicht hier",
        ],
      },
      {
        name: "Tricep Pushdown (Kabel)",
        muscles: "Trizeps (alle 3 Köpfe)",
        sets: 4, reps: "12", kg: "leicht–mittel", rest: "60 Sek",
        execution: [
          "Seil oder gerades Seil am Kabelzug",
          "Ellbogen fest am Körper, nicht bewegen",
          "Runterdrücken bis Arme ganz gestreckt",
          "Oben 1 Sek anspannen, langsam hoch",
        ],
      },
      {
        name: "Overhead Tricep Extension (Kabel oder Hantel)",
        muscles: "Langer Trizepskopf",
        sets: 3, reps: "12", kg: "10–12kg", rest: "60 Sek",
        execution: [
          "Hantel oder Seil über den Kopf",
          "Ellbogen zeigen nach oben, bleiben fest",
          "Hinter Kopf senken bis 90°",
          "Strecken bis Arme gerade — langer Kopf maximiert",
        ],
      },
    ],
  },
  Di: {
    label: "Dienstag",
    focus: "Rücken + Bizeps",
    color: "#4ECDC4",
    tip: "Rücken braucht Gefühl, nicht nur Kraft. Schulterblätter aktiv halten beim Ziehen — stell dir vor du willst sie in die Hosentasche stecken.",
    exercises: [
      {
        name: "Pull-Ups / Assisted Pull-Ups",
        muscles: "Breiter Rücken (Lats)",
        sets: 4, reps: "6–10", kg: "Körpergewicht", rest: "90 Sek",
        execution: [
          "Schulterbreiter Griff, Handflächen von dir weg",
          "Brust zur Stange ziehen, nicht Kinn",
          "Schulterblätter unten halten beim Hochziehen",
          "Langsam runter — volle Streckung",
        ],
      },
      {
        name: "Bent Over Row (Hanteln)",
        muscles: "Mittlerer Rücken + Lats",
        sets: 4, reps: "10", kg: "16–18kg", rest: "90 Sek",
        execution: [
          "Oberkörper 45° nach vorne, Rücken gerade",
          "Zum Bauch ziehen, Ellbogen nach hinten",
          "Schulterblätter am Ende zusammenkneifen",
          "3 Sek runter lassen, kontrolliert",
        ],
      },
      {
        name: "Seated Cable Row",
        muscles: "Mittlerer Rücken",
        sets: 3, reps: "12", kg: "mittel", rest: "60 Sek",
        execution: [
          "Aufrecht sitzen, leichtes Vorbeugen am Start",
          "Zum Bauch ziehen, Ellbogen eng am Körper",
          "Schulterblätter zusammenziehen am Ende",
          "Kontrolliert zurück zur Ausgangsposition",
        ],
      },
      {
        name: "Dumbbell Shrugs",
        muscles: "Trapez",
        sets: 3, reps: "15", kg: "18–22kg", rest: "60 Sek",
        execution: [
          "Aufrecht stehen, Hanteln an den Seiten",
          "Schultern so hoch wie möglich ziehen",
          "Oben 2 Sekunden halten",
          "Langsam runter, volle Streckung",
        ],
      },
      {
        name: "Dumbbell Curl (supiniert)",
        muscles: "Bizeps",
        sets: 4, reps: "12", kg: "12–14kg", rest: "60 Sek",
        execution: [
          "Sitzen, Rücken gerade, nicht anlehnen",
          "Beim Hochziehen nach aussen drehen (Supination)",
          "Ellbogen bleibt fest",
          "Langsam 3 Sek runter",
        ],
      },
      {
        name: "Hammer Curl",
        muscles: "Bizeps + Unterarm",
        sets: 3, reps: "12", kg: "12–14kg", rest: "60 Sek",
        execution: [
          "Daumen zeigt immer nach oben — kein Drehen",
          "Langsam negativer Teil (3 Sek runter)",
          "Beide Arme gleichzeitig oder alternierend",
          "Kein Schwung mit dem Körper",
        ],
      },
    ],
  },
  Mi: {
    label: "Mittwoch",
    focus: "Schultern + Core",
    color: "#A855F7",
    tip: "Schultern wachsen durch Konsistenz, nicht durch Gewicht. Core ist nicht nur Optik — er stabilisiert alles was du trainierst.",
    exercises: [
      {
        name: "Dumbbell Shoulder Press",
        muscles: "Schulter (gesamt)",
        sets: 4, reps: "10", kg: "12–14kg", rest: "90 Sek",
        execution: [
          "Sitzen, Rücken gerade, 90° Position",
          "Hanteln auf Schulterhöhe, Ellbogen 90°",
          "Gerade nach oben drücken",
          "Langsam runter bis Schulterniveau",
        ],
      },
      {
        name: "Lateral Raise",
        muscles: "Mittlere Schulter",
        sets: 4, reps: "15", kg: "8–10kg", rest: "60 Sek",
        execution: [
          "Leicht nach vorne beugen 10–15°",
          "Arme leicht gebeugt, seitlich hoch wie T",
          "Nur bis Schulterhöhe",
          "Daumen leicht nach unten drehen für mehr Aktivierung",
        ],
      },
      {
        name: "Face Pull (Kabel)",
        muscles: "Hintere Schulter + Rotatorenmanschette",
        sets: 3, reps: "15", kg: "leicht", rest: "60 Sek",
        execution: [
          "Seil auf Kopfhöhe am Kabelzug",
          "Zum Gesicht ziehen, Ellbogen hoch und weit",
          "Hände neben Ohren am Ende",
          "Sehr wichtig für Schultergesundheit — leicht halten",
        ],
      },
      {
        name: "Hanging Leg Raises (Klimmzugstange)",
        muscles: "Unterer Bauch + gesamter Core",
        sets: 4, reps: "12–15", kg: "Körpergewicht", rest: "60 Sek",
        execution: [
          "An Klimmzugstange hängen, Körper ruhig",
          "Beine gerade oder gebeugt hochheben bis 90°",
          "Langsam runter, Boden nicht ganz entspannen",
          "Kein Schwung — nur Bauchkraft",
        ],
      },
      {
        name: "Cable Crunch (Knie)",
        muscles: "Oberer Bauch",
        sets: 3, reps: "15", kg: "leicht–mittel", rest: "45 Sek",
        execution: [
          "Seil am Kabelzug, auf Knien davor",
          "Hände neben Kopf, Seil halten",
          "Nach unten einrollen wie Bauch zur Hüfte",
          "Oben kurz anspannen, langsam zurück",
        ],
      },
      {
        name: "Plank mit Schultertipper",
        muscles: "Core + Stabilität",
        sets: 3, reps: "30 Sek", kg: "Körpergewicht", rest: "45 Sek",
        execution: [
          "Normale Plank Position auf Händen",
          "Abwechselnd eine Hand zur gegenüber Schulter",
          "Hüfte bleibt stabil — nicht drehen",
          "Härter als normale Plank, braucht Konzentration",
        ],
      },
    ],
  },
  Do: {
    label: "Donnerstag",
    focus: "Beine + Waden",
    color: "#F59E0B",
    tip: "Beine sind der grösste Muskel im Körper. Tief in die Knie — kein halbes Squat. Hier wird am meisten Testosteron ausgeschüttet.",
    exercises: [
      {
        name: "Barbell Squat (oder Goblet Squat mit Hantel)",
        muscles: "Quadrizeps + Po + Core",
        sets: 4, reps: "10–12", kg: "so viel wie sauber möglich", rest: "120 Sek",
        execution: [
          "Füsse schulterbreit oder etwas breiter",
          "Rücken gerade, Brust hoch, Blick nach vorne",
          "Tief runter bis Oberschenkel parallel oder tiefer",
          "Durch die Fersen hochdrücken, Knie nach aussen",
        ],
      },
      {
        name: "Romanian Deadlift",
        muscles: "Hintere Oberschenkel + Po",
        sets: 4, reps: "12", kg: "16–20kg", rest: "90 Sek",
        execution: [
          "Aufrecht stehen, Hanteln vor dem Körper",
          "Rücken IMMER gerade — sehr wichtig",
          "Nach vorne beugen, Hanteln an Beinen entlang",
          "Bis tiefer Stretch in Oberschenkel, dann hoch",
        ],
      },
      {
        name: "Leg Press (Maschine)",
        muscles: "Quadrizeps + Po",
        sets: 3, reps: "12–15", kg: "mittel–schwer", rest: "90 Sek",
        execution: [
          "Füsse schulterbreit auf der Platte",
          "Tief runter, Knie nicht über Zehen",
          "Nicht ganz strecken oben — Spannung halten",
          "Langsam kontrolliert runter",
        ],
      },
      {
        name: "Dumbbell Lunges",
        muscles: "Beine gesamt + Gleichgewicht",
        sets: 3, reps: "10 pro Seite", kg: "12–14kg", rest: "60 Sek",
        execution: [
          "Aufrecht stehen, Hanteln an Seiten",
          "Grosser Schritt nach vorne",
          "Hinteres Knie fast den Boden berühren",
          "Zurückstossen und Seite wechseln",
        ],
      },
      {
        name: "Calf Raises (Maschine oder stehend)",
        muscles: "Waden",
        sets: 4, reps: "20", kg: "14–18kg", rest: "45 Sek",
        execution: [
          "Auf Zehenspitzen hochsteigen so hoch wie möglich",
          "Oben 2 Sekunden halten und anspannen",
          "Langsam runter, volle Streckung unten",
          "Waden brauchen hohe Wiederholungszahlen",
        ],
      },
    ],
  },
  Fr: {
    label: "Freitag",
    focus: "Rücken + Schultern (Hinten)",
    color: "#EF4444",
    tip: "Heute zweiter Rücken-Tag. Hintere Schulter und Trapez — oft vernachlässigt aber wichtig für eine breite, runde Silhouette.",
    exercises: [
      {
        name: "Lat Pulldown (Kabel)",
        muscles: "Breiter Rücken",
        sets: 4, reps: "10–12", kg: "mittel–schwer", rest: "90 Sek",
        execution: [
          "Weiter Griff, Handflächen von dir weg",
          "Zur Brust runterziehen, Ellbogen nach unten",
          "Schulterblätter zusammenziehen unten",
          "Langsam hoch — volle Streckung",
        ],
      },
      {
        name: "Single Arm Dumbbell Row",
        muscles: "Lat + Mittlerer Rücken",
        sets: 4, reps: "10 pro Seite", kg: "16–20kg", rest: "60 Sek",
        execution: [
          "Knie auf Bank, freie Hand hält Bank",
          "Hantel gerade nach oben ziehen zur Hüfte",
          "Ellbogen eng am Körper, nicht nach aussen",
          "Schulterblatt am Ende zusammenziehen",
        ],
      },
      {
        name: "Reverse Fly (Maschine oder Hanteln)",
        muscles: "Hintere Schulter",
        sets: 4, reps: "15", kg: "8–10kg", rest: "60 Sek",
        execution: [
          "Nach vorne gebeugt 45°, Hanteln hängen",
          "Arme seitlich hoch wie T — aber rückwärts",
          "Schulterblätter zusammenziehen oben",
          "Sehr wichtig für runde Schultern von hinten",
        ],
      },
      {
        name: "Face Pull (Kabel)",
        muscles: "Hintere Schulter + Gesundheit",
        sets: 3, reps: "15", kg: "leicht", rest: "45 Sek",
        execution: [
          "Zweites Mal diese Woche — absichtlich",
          "Hintere Schulter braucht viel Volumen",
          "Zum Gesicht ziehen, Ellbogen hoch",
          "Schultergesundheit langfristig sichern",
        ],
      },
      {
        name: "Dumbbell Shrugs",
        muscles: "Trapez",
        sets: 3, reps: "15", kg: "18–22kg", rest: "60 Sek",
        execution: [
          "Schultern so hoch wie möglich",
          "Oben 2 Sek halten",
          "Langsam runter, volle Streckung",
          "Kein Kreisen — nur hoch und runter",
        ],
      },
    ],
  },
  Sa: {
    label: "Samstag",
    focus: "Arme + Core (Intensiv)",
    color: "#10B981",
    tip: "Letzter Tag vor dem Ruhetag. Arme isoliert trainieren — langsam und kontrolliert. Core heute mit mehr Volumen als Mittwoch.",
    exercises: [
      {
        name: "Barbell Curl (oder EZ-Bar)",
        muscles: "Bizeps (Masse)",
        sets: 4, reps: "10", kg: "mittel", rest: "60 Sek",
        execution: [
          "Schulterbreiter Griff, Ellbogen fest",
          "Hochziehen bis Handflächen zum Gesicht",
          "Peak oben 1 Sek anspannen",
          "Langsam 3 Sek runter — das ist das Wichtigste",
        ],
      },
      {
        name: "Concentration Curl",
        muscles: "Bizeps Peak",
        sets: 3, reps: "12 pro Seite", kg: "10–12kg", rest: "60 Sek",
        execution: [
          "Sitzen, Ellbogen auf Innenseite des Oberschenkels",
          "Volle Konzentration auf eine Seite",
          "Langsam hoch, oben anspannen",
          "Langsam runter bis volle Streckung",
        ],
      },
      {
        name: "Tricep Pushdown (enges Seil)",
        muscles: "Trizeps",
        sets: 4, reps: "12", kg: "leicht–mittel", rest: "60 Sek",
        execution: [
          "Enges Seil oder V-Bar am Kabel",
          "Ellbogen fest am Körper",
          "Bis ganz gestreckt runterdrücken",
          "Langsam und kontrolliert hoch",
        ],
      },
      {
        name: "Hanging Leg Raises",
        muscles: "Unterer Bauch",
        sets: 4, reps: "15", kg: "Körpergewicht", rest: "60 Sek",
        execution: [
          "An Stange hängen, kein Schwung",
          "Beine gestreckt oder gebeugt bis 90°",
          "Langsam runter, nicht entspannen",
          "Kein Schwung — nur Bauchkraft",
        ],
      },
      {
        name: "Ab Wheel Rollout",
        muscles: "Gesamter Core (intensiv)",
        sets: 3, reps: "10–12", kg: "Körpergewicht", rest: "60 Sek",
        execution: [
          "Kniend, Ab Wheel vor dir",
          "Langsam nach vorne rollen so weit wie möglich",
          "Core die ganze Zeit angespannt",
          "Zurückrollen durch den Bauch, nicht durch Schwung",
        ],
      },
      {
        name: "Russian Twist (mit Gewichtsscheibe)",
        muscles: "Seitlicher Bauch (Obliques)",
        sets: 3, reps: "20 (10 pro Seite)", kg: "5–10kg Scheibe", rest: "45 Sek",
        execution: [
          "Sitzen, Beine leicht angehoben",
          "Gewicht von Seite zu Seite drehen",
          "Körper bleibt in der Mitte, nur Oberkörper dreht",
          "Langsam und kontrolliert",
        ],
      },
      {
        name: "Plank (Füsse erhöht)",
        muscles: "Core + Schultern",
        sets: 3, reps: "45–60 Sek", kg: "Körpergewicht", rest: "45 Sek",
        execution: [
          "Füsse auf Bank oder erhöhter Fläche",
          "Mehr Druck auf Schultern und oberen Core",
          "Körper gerade wie Brett",
          "Atmen — nicht den Atem anhalten",
        ],
      },
    ],
  },
  So: {
    label: "Sonntag",
    focus: "RUHETAG",
    color: "#6B7280",
    tip: "",
    exercises: [],
    rest: true,
  },
};

const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const muscleGroups = {
  Mo: ["Brust", "Trizeps"],
  Di: ["Rücken", "Bizeps"],
  Mi: ["Schultern", "Core"],
  Do: ["Beine", "Waden"],
  Fr: ["Rücken", "Hint. Schulter"],
  Sa: ["Arme", "Core"],
  So: ["Ruhe"],
};

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState("Mo");
  const [expandedEx, setExpandedEx] = useState(null);

  const day = workoutData[activeDay];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080808",
      fontFamily: "'Courier New', monospace",
      color: "#E5E5E5",
    }}>
      {/* Header */}
      <div style={{
        padding: "28px 20px 18px",
        borderBottom: "1px solid #181818",
        background: "#080808",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#444", marginBottom: "4px" }}>
          PRINCE DIGITALS / TRAINING V2
        </div>
        <div style={{ fontSize: "24px", fontWeight: "900", letterSpacing: "-1.5px", color: "#FFF" }}>
          6-TAGE SPLIT
        </div>
        <div style={{ fontSize: "11px", color: "#444", marginTop: "2px" }}>
          Optimiert · Juni → August 2026
        </div>
      </div>

      {/* Day Selector */}
      <div style={{
        display: "flex",
        padding: "14px 16px",
        gap: "6px",
        borderBottom: "1px solid #181818",
        overflowX: "auto",
      }}>
        {days.map(d => {
          const isActive = activeDay === d;
          const data = workoutData[d];
          return (
            <button
              key={d}
              onClick={() => { setActiveDay(d); setExpandedEx(null); }}
              style={{
                flex: "1",
                minWidth: "40px",
                padding: "10px 4px 8px",
                background: isActive ? data.color : "#111",
                color: isActive ? "#000" : data.rest ? "#333" : "#777",
                border: isActive ? "none" : "1px solid #1E1E1E",
                cursor: "pointer",
                fontFamily: "'Courier New', monospace",
                fontWeight: "900",
                fontSize: "12px",
                letterSpacing: "1px",
                borderRadius: "6px",
                transition: "all 0.15s",
              }}
            >
              {d}
            </button>
          );
        })}
      </div>

      {/* Day Header */}
      <div style={{
        padding: "20px 20px 14px",
        borderBottom: "1px solid #181818",
        background: "#0A0A0A",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: day.color, marginBottom: "4px" }}>
              {day.label.toUpperCase()}
            </div>
            <div style={{ fontSize: "22px", fontWeight: "900", color: "#FFF", letterSpacing: "-0.5px" }}>
              {day.focus}
            </div>
            {!day.rest && (
              <div style={{ fontSize: "11px", color: "#444", marginTop: "4px" }}>
                {day.exercises.length} Übungen
              </div>
            )}
          </div>
          {!day.rest && (
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end", maxWidth: "140px" }}>
              {muscleGroups[activeDay].map(m => (
                <span key={m} style={{
                  fontSize: "9px",
                  letterSpacing: "1px",
                  padding: "3px 8px",
                  border: `1px solid ${day.color}44`,
                  borderRadius: "20px",
                  color: day.color,
                  background: `${day.color}11`,
                }}>
                  {m.toUpperCase()}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Rest Day */}
      {day.rest && (
        <div style={{ padding: "80px 20px", textAlign: "center" }}>
          <div style={{ fontSize: "52px", marginBottom: "20px" }}>😴</div>
          <div style={{ fontSize: "20px", fontWeight: "900", color: "#333", letterSpacing: "3px" }}>
            RUHETAG
          </div>
          <div style={{ fontSize: "13px", color: "#2A2A2A", marginTop: "12px", lineHeight: "1.8" }}>
            Muskeln wachsen nicht im Training.<br />
            Sie wachsen in der Erholung.<br />
            Viel trinken. Gut essen. Schlafen.
          </div>
        </div>
      )}

      {/* Exercises */}
      {!day.rest && (
        <div style={{ padding: "14px 16px 50px" }}>
          {day.exercises.map((ex, i) => {
            const isOpen = expandedEx === i;
            return (
              <div key={i} style={{
                marginBottom: "8px",
                border: `1px solid ${isOpen ? day.color + "66" : "#1A1A1A"}`,
                borderRadius: "10px",
                overflow: "hidden",
                transition: "border-color 0.2s",
                background: isOpen ? "#0E0E0E" : "#0B0B0B",
              }}>
                <button
                  onClick={() => setExpandedEx(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: "13px",
                      fontWeight: "900",
                      color: "#FFF",
                      fontFamily: "'Courier New', monospace",
                    }}>
                      <span style={{ color: day.color, marginRight: "8px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {ex.name}
                    </div>
                    <div style={{ fontSize: "10px", color: "#444", marginTop: "3px", fontFamily: "'Courier New', monospace" }}>
                      {ex.muscles}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "13px", fontWeight: "900", color: day.color, fontFamily: "'Courier New', monospace" }}>
                      {ex.sets}×{ex.reps}
                    </div>
                    <div style={{ fontSize: "10px", color: "#333", fontFamily: "'Courier New', monospace" }}>
                      {ex.kg}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: "0 16px 16px", borderTop: "1px solid #181818" }}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "6px",
                      padding: "12px 0",
                      borderBottom: "1px solid #161616",
                      marginBottom: "14px",
                    }}>
                      {[
                        { label: "SETS", value: ex.sets },
                        { label: "REPS", value: ex.reps },
                        { label: "PAUSE", value: ex.rest },
                      ].map(stat => (
                        <div key={stat.label} style={{
                          background: "#080808",
                          borderRadius: "6px",
                          padding: "8px 6px",
                          textAlign: "center",
                          border: "1px solid #161616",
                        }}>
                          <div style={{ fontSize: "8px", letterSpacing: "2px", color: "#333", marginBottom: "4px" }}>
                            {stat.label}
                          </div>
                          <div style={{ fontSize: "13px", fontWeight: "900", color: day.color }}>
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#333", marginBottom: "10px" }}>
                      AUSFÜHRUNG
                    </div>
                    {ex.execution.map((step, si) => (
                      <div key={si} style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "8px",
                        alignItems: "flex-start",
                      }}>
                        <div style={{
                          minWidth: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: `${day.color}22`,
                          border: `1px solid ${day.color}44`,
                          color: day.color,
                          fontSize: "9px",
                          fontWeight: "900",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "1px",
                        }}>
                          {si + 1}
                        </div>
                        <div style={{ fontSize: "12px", color: "#999", lineHeight: "1.6" }}>
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Daily Tip */}
          <div style={{
            marginTop: "16px",
            padding: "14px 16px",
            background: "#0A0A0A",
            border: "1px solid #181818",
            borderRadius: "10px",
            borderLeft: `3px solid ${day.color}`,
          }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", color: day.color, marginBottom: "8px" }}>
              TIPP DES TAGES
            </div>
            <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.7" }}>
              {day.tip}
            </div>
          </div>

          {/* What's new badge */}
          <div style={{
            marginTop: "10px",
            padding: "12px 16px",
            background: "#0A0A0A",
            border: "1px solid #1A1A1A",
            borderRadius: "10px",
          }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#444", marginBottom: "8px" }}>
              NEU IN V2
            </div>
            <div style={{ fontSize: "11px", color: "#444", lineHeight: "1.7" }}>
              {activeDay === "Mo" && "→ Cable Flyes + Kabel Pushdown neu hinzugefügt"}
              {activeDay === "Di" && "→ Pull-Ups + Seated Cable Row neu hinzugefügt"}
              {activeDay === "Mi" && "→ Face Pull + Hanging Leg Raises + Cable Crunch neu"}
              {activeDay === "Do" && "→ Barbell Squat + Leg Press neu hinzugefügt"}
              {activeDay === "Fr" && "→ Komplett neuer Tag: Rücken + hintere Schulter"}
              {activeDay === "Sa" && "→ Ab Wheel + Russian Twist + erhöhte Plank neu"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
