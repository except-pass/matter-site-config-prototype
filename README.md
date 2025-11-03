# matter-site-config-prototype


Key UI Features and Behaviors

- Theme-driven navigation shell: The layout pairs a sticky left rail—housing the equipment selector and a scroll-linked table of contents—with a scrollable main canvas that shows the “Last Updated At” timestamp, page title, search bar, and a manual refresh action, mirroring the configuration workflow described earlier.
- Equipment-aware command routing: Equipment presets bundle Matter thing IDs and Modbus slave IDs, and whichever option is selected in the sidebar propagates into every command payload so generated requests target the right PCS automatically.
- Search with context awareness: User queries fan out across point titles, help text, entry labels, friendly enum strings, and descriptions; matching subsections auto-expand, and scroll tracking keeps the navigation rail’s active state aligned with what’s on screen.
- Point cards as command façades: Each card shows title, optional help icon, read-only badge, a reload control, and Set/Invoke actions. Clicking “Set” opens a modal preview of the payload that would be sent, letting operators see the exact request body before dispatching.
- Adaptive input widgets: Entry rendering logic inspects each schema entry—bitfields become checkbox lists, small enums render as radios while larger ones become width-aware dropdowns, and numeric inputs fall back to standard fields when no range is provided.
- Range-aware multi-handle sliders: When a point exposes multiple ranged numbers, the UI initializes staggered defaults, enforces cross-handle constraints, and gives a color-coded multi-slider with numeric inputs to prevent start/stop inversions.
- Time-centric widgets: Dedicated builders cover single time pickers, paired time ranges (with clear buttons), multi-window schedules derived from StartTimeN/EndTimeN registers, and a specialized Generator Exercise scheduler that previews the resulting cron-like cadence.
- On-demand documentation: Help text opens in a modal with lightweight markdown emphasis, accessible via the info badge on each card and dismissible with Escape or a close button.
- Protocol-aware payload synthesis: Behind every “Set” is logic that normalizes enum friendliness, packs bitfields, branches into Matter write/invoke sequences (including multi-element overrides), Modbus read/write frames with function-code selection and scaling, or custom CGI requests for generator automation.
- Progressive disclosure of sections: Sections and subsections respect collapsed-by-default flags (e.g., “Advanced”), expand automatically when search hits occur, and allow manual toggling so operators can reveal device-specific points without cluttering the default view.