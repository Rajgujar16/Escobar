'use client';

// Inspired by react-hot-toast library
import *'react';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id;
  title?;
  description?;
  action?;
};

const actionTypes = {
  ADD_TOAST,
  UPDATE_TOAST,
  DISMISS_TOAST,
  REMOVE_TOAST,
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type;
      toast;
    }
  | {
      type;
      toast;
    }
  | {
      type;
      toastId?;
    }
  | {
      type;
      toastId?;
    };

const toastTimeouts = new Map<string, ReturnType>();

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type,
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state)=> {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts),
      };

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open,
              }
            : t
        ),
      };
    }
    case 'REMOVE_TOAST'=== undefined) {
        return {
          ...state,
          toasts,
        };
      }
      return {
        ...state,
        toasts) => t.id !== action.toastId),
      };
  }
};

const listeners) => void> = [];

let memoryState= { toasts;

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, 'id'>;

function toast({ ...props }) {
  const id = genId();

  const update = (props) =>
    dispatch({
      type,
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type);

  dispatch({
    type,
    toast: {
      ...props,
      id,
      open,
      onOpenChange) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss) => dispatch({ type),
  };
}

export { useToast, toast };
