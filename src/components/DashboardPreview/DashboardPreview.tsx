import { useState, useEffect, useRef } from 'react';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';
import { 
  Play, 
  RefreshCw, 
  Activity, 
  Cpu, 
  Database, 
  Brain, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Clock
} from 'lucide-react';

interface PipelineStep {
  name: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  duration: string;
}

export default function DashboardPreview() {
  const [pipelineActive, setPipelineActive] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [pipelineSteps, setPipelineSteps] = useState<PipelineStep[]>([
    { name: 'Data Ingestion (Snowflake)', status: 'idle', duration: '12ms' },
    { name: 'Anomalies Classification (ML)', status: 'idle', duration: '18ms' },
    { name: 'Action Dispatcher (Webhook)', status: 'idle', duration: '4ms' },
    { name: 'Cloud Store Synchronization', status: 'idle', duration: '6ms' }
  ]);
  const [logs, setLogs] = useState<string[]>([
    'System standby. Awaiting execution trigger...'
  ]);
  const [insightText, setInsightText] = useState('Select anomalies vector to synthesize natural language intelligence report.');
  const [isInsightGenerating, setIsInsightGenerating] = useState(false);
  const [chartData, setChartData] = useState<number[]>([45, 62, 58, 74, 91, 85, 110, 95, 120, 134, 118, 145]);
  const [throughput, setThroughput] = useState(48912);
  const [systemIntegrity, setSystemIntegrity] = useState(99.98);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Fluctuating KPI values
  useEffect(() => {
    const interval = setInterval(() => {
      if (pipelineActive) {
        setThroughput(prev => prev + Math.floor(Math.random() * 500) - 150);
        setSystemIntegrity(prev => Math.min(100, Math.max(99.91, prev + (Math.random() * 0.04) - 0.015)));
      } else {
        setThroughput(prev => prev + Math.floor(Math.random() * 120) - 60);
        setSystemIntegrity(prev => Math.min(100, Math.max(99.94, prev + (Math.random() * 0.01) - 0.005)));
      }
    }, 1800);
    return () => clearInterval(interval);
  }, [pipelineActive]);

  // Terminal autoscroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  // Simulation of pipeline execution
  const runPipeline = () => {
    if (pipelineActive) return;
    setPipelineActive(true);
    setActiveStepIndex(0);
    setShowSuccessToast(false);
    setLogs(prev => [...prev, '[START] Custom webhook pipeline triggered. Ingesting raw events...']);

    // Step 0
    setPipelineSteps(prev => prev.map((step, idx) => idx === 0 ? { ...step, status: 'running' } : step));
  };

  useEffect(() => {
    if (!pipelineActive || activeStepIndex < 0) return;

    if (activeStepIndex >= pipelineSteps.length) {
      setPipelineActive(false);
      setActiveStepIndex(-1);
      setShowSuccessToast(true);
      setLogs(prev => [...prev, '[SUCCESS] Pipeline completed. 0 defects. Total execution: 40ms.']);
      // Trigger a light chart update to show visual result
      setChartData(prev => [...prev.slice(1), prev[prev.length - 1] + Math.floor(Math.random() * 20) + 5]);
      return;
    }

    const timer = setTimeout(() => {
      setPipelineSteps(prev => prev.map((step, idx) => {
        if (idx === activeStepIndex) {
          return { ...step, status: 'completed' };
        }
        if (idx === activeStepIndex + 1) {
          return { ...step, status: 'running' };
        }
        return step;
      }));
      
      const currentStep = pipelineSteps[activeStepIndex];
      setLogs(prev => [
        ...prev, 
        `[OK] ${currentStep.name} executed successfully in ${currentStep.duration}`
      ]);
      
      // Animate graph line dynamically by appending real-time live jitter
      setChartData(prev => [...prev.slice(1), prev[prev.length - 1] + Math.floor(Math.random() * 25) - 8]);
      
      setActiveStepIndex(prev => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [pipelineActive, activeStepIndex]);

  // Generation of AI Insights
  const generateInsight = () => {
    if (isInsightGenerating) return;
    setIsInsightGenerating(true);
    setInsightText('Synthesizing operational datastores via fine-tuned model agent...');
    
    const insights = [
      "Analysis complete: Detected 4% efficiency variance on US-East data partition. Resolved automatically by deploying cached replication streams.",
      "Predictive summary: Database query volumes are expected to surge 22% between 18:00 and 20:00. Pre-emptively scale-to-zero microclusters have been allocated.",
      "Anomalous trigger: Unusually high webhook payloads from node stripe.agent.14. Action paths isolated and verified safe by autonomous logic loop."
    ];

    const randomInsight = insights[Math.floor(Math.random() * insights.length)];
    let currentLength = 0;

    const interval = setInterval(() => {
      currentLength += 3;
      setInsightText(randomInsight.substring(0, currentLength));
      if (currentLength >= randomInsight.length) {
        clearInterval(interval);
        setIsInsightGenerating(false);
      }
    }, 15);
  };

  // Reset pipeline simulation helper
  const resetPipeline = () => {
    setPipelineActive(false);
    setActiveStepIndex(-1);
    setShowSuccessToast(false);
    setThroughput(48912);
    setSystemIntegrity(99.98);
    setPipelineSteps([
      { name: 'Data Ingestion (Snowflake)', status: 'idle', duration: '12ms' },
      { name: 'Anomalies Classification (ML)', status: 'idle', duration: '18ms' },
      { name: 'Action Dispatcher (Webhook)', status: 'idle', duration: '4ms' },
      { name: 'Cloud Store Synchronization', status: 'idle', duration: '6ms' }
    ]);
    setLogs(['System standby. Click Run Pipeline to initiate automated event stream.']);
  };

  return (
    <section 
      id="dashboard" 
      className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-radial-cyan-glow opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-secondary-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#3B82F6]">Live Interactive Demo</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
              Real-Time AI Automation Engine
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E1]">
              Experience the active runtime. Simulate data pipelines, command natural 
              language summaries, and monitor throughput live.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={resetPipeline}
              className="px-5 py-2.5 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all cursor-pointer"
            >
              Reset Simulation
            </button>
            <button
              onClick={runPipeline}
              disabled={pipelineActive}
              className={`inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white rounded-full transition-all cursor-pointer ${
                pipelineActive 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-white/5' 
                  : 'bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-[1.02]'
              }`}
            >
              <Play className="w-3 h-3 fill-white" />
              Run Pipeline
            </button>
          </div>
        </div>

        {/* Dashboard Frame Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Workspace Frame (Col Span 2) */}
          <div className="lg:col-span-2 rounded-2xl glass-panel border border-white/8 overflow-hidden shadow-2xl">
            {/* Top Bar of Console */}
            <div className="px-6 py-4 border-b border-white/5 bg-[#111827]/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-gray-400 ml-2">neuroflow://live-agent-node</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1.5 text-success">
                  <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                  Cluster Online
                </span>
                <span className="hidden sm:inline">V2.4_PROD</span>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Analytics Summary Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary-accent/20 transition-colors duration-300">
                  <span className="text-xs text-gray-400 font-medium">Throughput</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl md:text-2xl font-bold font-mono text-white">
                      <AnimatedCounter value={throughput} formatter={(val) => Math.floor(val).toLocaleString()} />
                    </span>
                    <span className="text-xs text-success font-medium flex items-center">+12.4%</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-secondary-accent/20 transition-colors duration-300">
                  <span className="text-xs text-gray-400 font-medium">Active Agent Nodes</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl md:text-2xl font-bold font-mono text-white">
                      <AnimatedCounter value={8} />/<AnimatedCounter value={8} />
                    </span>
                    <span className="text-xs text-success font-medium">Healthy</span>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-highlight/20 transition-colors duration-300">
                  <span className="text-xs text-gray-400 font-medium">System Integrity</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl md:text-2xl font-bold font-mono text-highlight">
                      <AnimatedCounter value={systemIntegrity} formatter={(val) => val.toFixed(2)} />%
                    </span>
                    <span className="text-xs text-gray-500">Verified SLA</span>
                  </div>
                </div>
              </div>

              {/* Central Dynamic Graph */}
              <div className="p-5 rounded-xl bg-[#0F172A]/80 border border-white/5 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Ingested Operations Volume</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live (seconds)
                  </span>
                </div>
                
                {/* Visual SVG Chart Grid */}
                <div className="h-44 w-full relative flex items-end">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 176" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* SVG Grid lines */}
                    <line x1="0" y1="25%" x2="100%" y2="25%" stroke="rgba(255,255,255,0.02)" strokeDasharray="4 4" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.02)" strokeDasharray="4 4" />
                    <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(255,255,255,0.02)" strokeDasharray="4 4" />
                    
                    {/* Glowing Area Fill */}
                    <path
                      d={`M 0 176 L ${chartData.map((val, i) => `${(i / (chartData.length - 1)) * 560} ${176 - (val / 180) * 120}`).join(' L ')} L 560 176 Z`}
                      fill="url(#chartGlow)"
                    />
                    
                    {/* Core Line */}
                    <path
                      d={chartData.map((val, i) => `${i === 0 ? 'M' : 'L'} ${(i / (chartData.length - 1)) * 560} ${176 - (val / 180) * 120}`).join(' ')}
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2.5"
                    />

                    {/* Dot pointer for the last element */}
                    <circle
                      cx="560"
                      cy={176 - (chartData[chartData.length - 1] / 180) * 120}
                      r="4"
                      fill="#06B6D4"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* High contrast labels */}
                  <div className="absolute left-2 top-2 text-[9px] font-mono text-gray-500">180k/s</div>
                  <div className="absolute left-2 bottom-2 text-[9px] font-mono text-gray-500">20k/s</div>
                </div>

                {/* X Axis Indicators */}
                <div className="flex justify-between mt-3 text-[10px] font-mono text-gray-500 px-1">
                  <span>10s ago</span>
                  <span>5s ago</span>
                  <span>Now</span>
                </div>
              </div>

              {/* Live Pipelines Nodes Flow */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Automated Node Pipeline</span>
                  {pipelineActive && (
                    <span className="text-[10px] font-mono text-[#06B6D4] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-ping" />
                      Executing Node 0{activeStepIndex + 1}/4...
                    </span>
                  )}
                  {!pipelineActive && showSuccessToast && (
                    <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                      ✓ Complete
                    </span>
                  )}
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] transition-all duration-500 ease-out"
                    style={{ 
                      width: pipelineActive 
                        ? `${((activeStepIndex) / pipelineSteps.length) * 100}%` 
                        : showSuccessToast
                          ? '100%' 
                          : '0%' 
                    }}
                  />
                </div>

                {/* Success Notification */}
                {showSuccessToast && (
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between animate-fade-in relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="p-2 bg-emerald-500/15 rounded-lg text-emerald-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Pipeline Successfully Executed</h4>
                        <p className="text-[11px] text-gray-400">4 stages completed in 40ms with 0 defects. Verified SLA.</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowSuccessToast(false)} 
                      className="text-gray-400 hover:text-white text-xs font-mono px-3 py-1 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 cursor-pointer transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {pipelineSteps.map((step, idx) => (
                    <div 
                      key={step.name} 
                      className={`p-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                        step.status === 'running' 
                          ? 'bg-[#1E1B4B]/80 border-secondary-accent/50 shadow-lg scale-[1.01]' 
                          : step.status === 'completed' 
                            ? 'bg-emerald-950/20 border-emerald-500/25'
                            : 'bg-white/[0.01] border-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-gray-500">Node 0{idx + 1}</span>
                        {step.status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5 text-success animate-scale-up" />}
                        {step.status === 'running' && <RefreshCw className="w-3.5 h-3.5 text-highlight animate-spin" />}
                        {step.status === 'idle' && <Clock className="w-3.5 h-3.5 text-gray-600" />}
                      </div>
                      <p className="text-xs font-bold text-white truncate">{step.name.split(' ')[0]} {step.name.split(' ')[1] || ''}</p>
                      <p className="text-[10px] text-gray-400 mt-1 font-mono">{step.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* AI Insights & Log Center (Col Span 1) */}
          <div className="rounded-2xl glass-panel border border-white/8 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden h-full min-h-[500px]">
            {/* Background glowing indicator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-accent/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-2 pb-4 border-b border-white/5">
                <Brain className="w-5 h-5 text-highlight" />
                <div>
                  <h3 className="text-sm font-bold text-white">Autonomous Agent</h3>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Natural Intelligence Engine</span>
                </div>
              </div>

              {/* AI Natural language insights generated dynamically */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Cognitive Insights</span>
                  <button
                    onClick={generateInsight}
                    disabled={isInsightGenerating}
                    className="text-[10px] font-mono text-highlight hover:text-white flex items-center gap-1 cursor-pointer focus:outline-none"
                  >
                    Generate Report
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs leading-relaxed text-gray-300 min-h-[110px] transition-all flex items-center relative">
                  {isInsightGenerating && (
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-highlight animate-ping" />
                  )}
                  <p>{insightText}</p>
                </div>
              </div>

              {/* Log console listing output events */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                  <Terminal className="w-3.5 h-3.5 text-gray-500" />
                  <span>Operation Log Console</span>
                </div>
                <div ref={terminalRef} className="p-4 rounded-xl bg-[#090E1A] border border-white/5 font-mono text-[10px] text-gray-400 space-y-2.5 h-44 overflow-y-auto">
                  {logs.map((log, index) => (
                    <div key={index} className="leading-relaxed border-l-2 border-primary-accent/40 pl-2">
                      <span className="text-highlight font-semibold">syslog_v2 ~</span> {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick interactive parameters */}
            <div className="pt-6 border-t border-white/5 mt-6">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span className="flex items-center gap-1">
                  <SlidersHorizontal className="w-3 h-3" />
                  ML Threshold
                </span>
                <span className="font-mono text-white font-medium">92%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1">
                <div className="bg-gradient-to-r from-primary-accent to-highlight h-1 rounded-full w-[92%]" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
