// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number, immediate = false) {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function executedFunction<U>(this: U, ...args: Parameters<typeof func>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    if (timeout)
      clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

interface ThrottleOptions {
  noTrailing: boolean;
  noLeading: boolean;
  debounceMode?: boolean;
}

interface CancelOptions {
  upcomingOnly: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => void>(delay: number, callback: T, options?: ThrottleOptions) {
	const {
		noTrailing = false,
		noLeading = false,
		debounceMode = undefined
	} = options || {};

	let timeoutID: ReturnType<typeof setTimeout> | undefined;
	let cancelled = false;


	let lastExec = 0;


	function clearExistingTimeout() {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}
	}

	// Function to cancel next exec
	function cancel(options: CancelOptions) {
		const { upcomingOnly = false } = options || {};
		clearExistingTimeout();
		cancelled = !upcomingOnly;
	}

	function wrapper<U>(this: U, ...arguments_: Parameters<typeof callback>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
		const self = this;
		const elapsed = Date.now() - lastExec;

		if (cancelled) {
			return;
		}


		function exec() {
			lastExec = Date.now();
			callback.apply(self, arguments_);
		}


		function clear() {
			timeoutID = undefined;
		}

		if (!noLeading && debounceMode && !timeoutID) {

			exec();
		}

		clearExistingTimeout();

		if (debounceMode === undefined && elapsed > delay) {
			if (noLeading) {
	
				lastExec = Date.now();
				if (!noTrailing) {
					timeoutID = setTimeout(debounceMode ? clear : exec, delay);
				}
			} else {

				exec();
			}
		} else if (noTrailing !== true) {
			timeoutID = setTimeout(
				debounceMode ? clear : exec,
				debounceMode === undefined ? delay - elapsed : delay
			);
		}
	}

	wrapper.cancel = cancel;

	return wrapper;
}