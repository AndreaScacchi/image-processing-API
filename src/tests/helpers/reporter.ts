// jasmine-spec-reporter documentation to configure the reporter
// to display Jasmine results to your terminal application
import {
	DisplayProcessor,
	SpecReporter,
	StacktraceOption,
} from "jasmine-spec-reporter";
import SuiteInfo = jasmine.JasmineStartedInfo;

class CustomProcessor extends DisplayProcessor {
	public displayJasmineStarted(info: SuiteInfo, log: string): string {
		return `${log}`;
	}
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
	new SpecReporter({
		spec: {
			displayStacktrace: StacktraceOption.NONE,
		},
		customProcessors: [CustomProcessor],
	})
);
