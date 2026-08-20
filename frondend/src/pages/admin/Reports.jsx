function Reports() {
  const reports = [
    { title: "Revenue Report", value: "₹18.4L", detail: "Monthly gross booking value" },
    { title: "Fleet Utilization", value: "74%", detail: "Average active vehicle usage" },
    { title: "Cancellation Rate", value: "3.8%", detail: "Down 1.2% from last month" },
    { title: "Owner Performance", value: "91%", detail: "On-time handover score" },
  ];

  return (
    <section className="admin-panel">
      <div className="admin-panel__header">
        <div>
          <span className="admin-kicker">Analytics</span>
          <h1>Reports</h1>
          <p>Generate operational, revenue, fleet, and customer performance reports.</p>
        </div>
        <button className="admin-button" type="button">Generate Report</button>
      </div>

      <div className="admin-report-grid">
        {reports.map((report) => (
          <article className="admin-report-card" key={report.title}>
            <span>{report.title}</span>
            <strong>{report.value}</strong>
            <p>{report.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reports;
