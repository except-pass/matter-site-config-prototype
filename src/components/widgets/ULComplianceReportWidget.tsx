import { useMemo, useState } from 'react';
import { PointDef, EquipmentOption } from '../../types/schema';

interface ULComplianceReportWidgetProps {
  point: PointDef;
  equipment: EquipmentOption;
  readOnly: boolean;
}

/**
 * Simple widget that builds a UL compliance text report and prompts the browser to download it.
 */
export function ULComplianceReportWidget({ point, equipment, readOnly }: ULComplianceReportWidgetProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const parameterSummaries = useMemo(() => {
    if (point.entries?.length) {
      return point.entries.map((entry) => {
        const label = entry.name || entry.arg;
        const description = entry.description || entry.longdescription || 'Value reported by inverter firmware';
        return `${label}: ${description}`;
      });
    }

    return [
      'Voltage Ride-Through Windows: IEEE 1547 Category B',
      'Frequency Ride-Through Windows: IEEE 1547 Category B',
      'Volt-VAR Curve: UL 1741 SA Default Profile',
      'Frequency-Watt Behavior: Droop Enabled, 5% Slope',
      'Anti-Islanding Method: Active (Sandia)'
    ];
  }, [point.entries]);

  const handleDownload = () => {
    if (readOnly || isGenerating) {
      return;
    }

    setErrorMessage(null);
    setIsGenerating(true);

    try {
      const now = new Date();
      const timestamp = now.toISOString().replace(/[:.]/g, '-');
      const printableTime = now.toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      const reportSections = [
        'Fortress Power Envy Inverter',
        'UL Compliance Report',
        'This is just a placeholder report for testing purposes.  Dont base the real implementation on this.',
        ''.padEnd(20, '='),
        `Generated: ${printableTime}`,
        `Device: ${equipment.label}`,
        '',
        'Purpose',
        'This report captures the active grid settings configured on the inverter so they can be shared with AHJs, utilities, or inspectors who require UL 1741 / IEEE 1547 conformance evidence.',
        '',
        'Key Grid Parameters',
        ...parameterSummaries.map((line) => `• ${line}`),
        '',
        'Statements of Compliance',
        '- Grid support functions follow UL 1741 SA requirements for exporting inverters.',
        '- Trip settings align with local utility specifications (for example, California Rule 21, Puerto Rico LUMA).',
        '- Anti-islanding protections remain enabled and tested per UL procedures.',
        '',
        'Notes',
        'This summary reflects the values active on the device at the time of export. Re-run the report after making configuration changes to maintain an auditable paper trail.'
      ];

      const reportBody = reportSections.join('\n');
      const blob = new Blob([reportBody], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `ul-compliance-${equipment.id}-${timestamp}.txt`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to generate UL Compliance report', err);
      setErrorMessage('Unable to generate the report. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">


      {errorMessage && (
        <div className="rounded border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
          {errorMessage}
        </div>
      )}

      <button
        type="button"
        className={`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition ${
          readOnly || isGenerating
            ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
        }`}
        disabled={readOnly || isGenerating}
        onClick={handleDownload}
      >
        {isGenerating ? 'Preparing Report…' : 'Download UL Compliance Report'}
      </button>

      <div className="text-xs text-slate-500">
        The downloaded text file includes device metadata, ride-through windows, and other grid-support functions so you can keep documentation for AHJ or utility reviews.
      </div>
    </div>
  );
}
