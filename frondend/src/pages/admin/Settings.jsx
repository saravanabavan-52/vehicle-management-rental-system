function Settings() {
  const settings = [
    { label: "Require owner document verification", enabled: true },
    { label: "Enable automatic booking approval", enabled: false },
    { label: "Send payment failure alerts", enabled: true },
    { label: "Allow same-day vehicle listing", enabled: false },
  ];

  return (
    <section className="admin-panel">
      <div className="admin-panel__header">
        <div>
          <span className="admin-kicker">System Controls</span>
          <h1>Settings</h1>
          <p>Configure admin policies for bookings, owners, vehicles, and payments.</p>
        </div>
        <button className="admin-button" type="button">Save Changes</button>
      </div>

      <div className="admin-settings-list">
        {settings.map((setting) => (
          <label className="admin-setting" key={setting.label}>
            <span>{setting.label}</span>
            <input type="checkbox" defaultChecked={setting.enabled} />
          </label>
        ))}
      </div>
    </section>
  );
}
export default Settings;
